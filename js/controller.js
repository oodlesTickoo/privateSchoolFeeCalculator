app.controller("TTRController", ['$scope', '$timeout', 'AgeCalculator', 'TaxRateCalculator', 'SGCRate', 'WithoutSSCalculator', 'WithSSCalculator', 'ChartServiceHc', 'DonutChartServiceHc', 'PdfMaker', function($scope, $timeout, AgeCalculator, TaxRateCalculator, SGCRate, WithoutSSCalculator, WithSSCalculator, ChartServiceHc, DonutChartServiceHc, PdfMaker) {

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

    $scope.indexlevel=0.04;

    $scope.grossAnnualIncome = 120000;
    $scope.homeMortgage = 500000;
    $scope.investmentPropertyMortgage = 0;
    $scope.creditCardDebt = 2000;
    $scope.carLoan = 20000;
    $scope.personalLoan = 0;
    $scope.otherLoan = 0;
    $scope.homeValue = 800000;
    $scope.cashAtBank = 20000;
    $scope.otherInvestment = 20000;
    $scope.superBalance = 100000;
    $scope.ecLife = 250000;
    $scope.ecTPD = 0;
    $scope.ecIP = 0;
    $scope.ecTrauma = 0;
    $scope.numChildren = 2;
    $scope.funeralCost = 20000;
    $scope.educationExpensePerYearPerChild = 5000;
    $scope.familyLivingCostPerYear = 90000;
    $scope.inflation = 2;
    $scope.rateOfReturn = 5;
    $scope.moneyToBeBorrowed = 400000;
    $scope.valueOfNewProperty = 500000;
    $scope.ageSpouse = 47;
    $scope.spouseSalary = 50000;
    $scope.ageChildren1 = 3;
    $scope.ageChildren2 = 5;
    $scope.ageChildren3 = 10;
    $scope.ageChildren4 = 10;
    $scope.ageChildren5 = 10;
    $scope.ageChildren6 = 10;
    $scope.ageChildren7 = 10;
    $scope.ageChildren8 = 10;


    $scope.genderOption = true;
    $scope.spouseOption = true;
    $scope.smokeOption = false;
    $scope.spouseWorkOption = true;
    $scope.buyOption = true;


    $scope.studyingOption1Change = function(studying1) {
        $scope.studyingOption1 = studying1;
    }
    $scope.studyingOption2Change = function(studying2) {
        $scope.studyingOption2 = studying2;
    }
    $scope.studyingOption3Change = function(studying3) {
        $scope.studyingOption3 = studying3;
    }
    $scope.studyingOption4Change = function(studying4) {
        $scope.studyingOption4 = studying4;
    }
    $scope.studyingOption5Change = function(studying5) {
        $scope.studyingOption5 = studying5;
    }
    $scope.studyingOption6Change = function(studying6) {
        $scope.studyingOption6 = studying6;
    }

    $scope.stateListOb = [{ id: 0, name: "NSW" },
        { id: 1, name: "VIC" },
        { id: 2, name: "QLD" },
        { id: 3, name: "SA" },
        { id: 4, name: "WA" },
        { id: 5, name: "ACT" },
        { id: 6, name: "TAS" }
    ];
    $scope.portfolioListOb = [{ id: 0, name: "FC Conservative" },
        { id: 1, name: "FC Moderate" },
        { id: 2, name: "FC Balanced" },
        { id: 3, name: "FC Balanced Growth" },
        { id: 4, name: "FC Growth" },
        { id: 5, name: "Select your own investment return" },
    ];
    function findOneTimeFee(temp){

    }
    function findAnnualFee(temp){

    }

    function calculate() {
        var childStudyingArray = [$scope.studyingOption1, $scope.studyingOption2, $scope.studyingOption3, $scope.studyingOption4, $scope.studyingOption5, $scope.studyingOption6];
        var childSchoolArray = [$scope.schoolYear1, $scope.schoolYear2, $scope.schoolYear3, $scope.schoolYear4, $scope.schoolYear5, $scope.schoolYear6];
        var childDurationArray = [$scope.schoolDuration1, $scope.schoolDuration2, $scope.schoolDuration3, $scope.schoolDuration4, $scope.schoolDuration5, $scope.schoolDuration6];
        var childGradArray = [$scope.schoolEnd1, $scope.schoolEnd2, $scope.schoolEnd3, $scope.schoolEnd4, $scope.schoolEnd5, $scope.schoolEnd6];
        var f1Array = [],
            f2Array = [],
            f3Array = [],
            f4Array = [],
            f5Array = [],
            f6Array = [];
        var feeArray = [f1Array, f2Array, f3Array, f4Array, f5Array, f6Array];
        var yearArray = [],
            totalFeeArray = [],
            pInvestArray = [],
            pBalArray = [];
        var oneFeeArray=[], annualFeeArray=[];    

        for (i = 0; i < numChildren; i++) {
            childGradArray[i] = childSchoolArray[i] + childDurationArray[i] - 1;
            oneFeeArray[i]=findOneTimeFee(100);
            annualFeeArray[i]=findAnnualFee(100);
        }

        min = $scope.begnYearInvestment;
        max = $scope.endYearInvestment;
        diff = max - min;

        for (i = 0; i <= diff; i++) {
            yearArray[i] = min + i;
        }

        for (i = 0; i < numChildren; i++) {
            if (childStudyingArray[i]==true) {
                for(j=0;j<childDurationArray[i];j++){
                    feeArray[i][j]=annualFeeArray[j]*((1+$scope.indexlevel)^(yearArray[j]-$scope.begnYearInvestment));
                }
            } else {
                temp=childSchoolArray[i]-min;
                feeArray[i][0]=annualFeeArray[0]+oneFeeArray[0]*((1+$scope.indexlevel)^temp);
                for(j=1;j<=childDurationArray[i];j++){
                    feeArray[i][j]=annualFeeArray[j]*((1+$scope.indexlevel)^(yearArray[j]-$scope.begnYearInvestment));
                }
            }
        }




    }




    document.getElementById("download").addEventListener("click", function() {
        var toggleNeeded = false;
        if (!$scope.chartOneOpen) {
            document.getElementById("container").classList.toggle("ng-hide");
            toggleNeeded = true;
        }
        PdfMaker.createChart($scope.dob, $scope.age, $scope.fy, $scope.cses, $scope.thp, $scope.resultWithoutSS, $scope.resultWithSS, $scope.needSS, $scope.optimisedSS, toggleNeeded);
    });


}]);
