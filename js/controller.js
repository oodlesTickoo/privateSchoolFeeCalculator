app.controller("TTRController", ['$scope', '$timeout', 'AgeCalculator', 'TaxRateCalculator', 'SGCRate', 'WithoutSSCalculator', 'WithSSCalculator', 'ChartServiceHc', 'DonutChartServiceHc', 'PdfMaker', function($scope, $timeout, AgeCalculator, TaxRateCalculator, SGCRate, WithoutSSCalculator, WithSSCalculator, ChartServiceHc, DonutChartServiceHc, PdfMaker) {

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

    var paymentFrequency = "0";
    $timeout(function() {
        $('.selectpicker').selectpicker({
            style: 'btn-info',
            size: 2,
        });
        $('.selectpicker option[value="0"]').attr("selected", true);
        $('.selectpicker').selectpicker('refresh');
    });

    $('.selectpicker').on('change', function() {
        paymentFrequency = $('.selectpicker option:selected').val();
        console.log("paymentFrequency", paymentFrequency)
        $timeout(0);
    });

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

    $scope.portAnnualReturn = [0.0456, 0.0655, 0.0853, 0.1009, 0.1165, 0.06];
    $scope.sd = [0.05, 0.06, 0.07, 0.08, 0.09, 0.02];
    $scope.simProb = Math.random() * 100;

    function findOneTimeFee(temp) {

    }

    function findAnnualFee(temp) {

    }

    function getTotalFeeValue(temp) {
        return totalFeeArray[temp - $scope.contStartYear];
    }

    function PV(rate, periods, payment, future, type) {
        // Initialize type
        var type = (typeof type === 'undefined') ? 0 : type;

        // Evaluate rate and periods (TODO: repersonalLoanace with secure expression evaluator)
        rate = eval(rate);
        periods = eval(periods);

        // Return present value
        if (rate === 0) {
            return -payment * periods - future;
        } else {
            return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
        }
    }

    function NPV(rate,args) {

        var value = 0;
        for (var j = 1; j < args.length; j++) {
            value += args[j] / Math.pow(1 + rate, j);
        }
        return value;
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
        var oneFeeArray = [],
            annualFeeArray = [];

        for (i = 0; i < numChildren; i++) {
            childGradArray[i] = childSchoolArray[i] + childDurationArray[i] - 1;
            oneFeeArray[i] = findOneTimeFee(100);
            annualFeeArray[i] = findAnnualFee(100);
        }

        min = $scope.begnYearInvestment;
        max = $scope.endYearInvestment;
        diff = max - min;

        for (i = 0; i <= diff; i++) {
            yearArray[i] = min + i;
            totalFeeArray[i] = 0;
        }

        console.log("totalFeeArray", totalFeeArray);

        for (i = 0; i < numChildren; i++) {
            if (childStudyingArray[i] == true) {
                for (j = 0; j < childDurationArray[i]; j++) {
                    feeArray[i][j] = annualFeeArray[j] * ((1 + $scope.indexlevel) ^ (yearArray[j] - $scope.begnYearInvestment));
                }
            } else {
                temp = childSchoolArray[i] - min;
                feeArray[i][0] = annualFeeArray[0] + oneFeeArray[0] * ((1 + $scope.indexlevel) ^ temp);
                for (j = 1; j <= childDurationArray[i]; j++) {
                    feeArray[i][j] = annualFeeArray[j] * ((1 + $scope.indexlevel) ^ (j + 1));
                }
            }
        }

        console.log("feeArray 1", feeArray[0]);
        console.log("feeArray 2", feeArray[1]);

        for (i = 0; i < numChildren; i++) {
            temp = min - childSchoolArray[i];
            for (j = temp; j < feeArray[i].length; j++) {
                totalFeeArray[j] = totalFeeArray[j] + feeArray[i][j];
            }
        }

        console.log("totalFeeArray", totalFeeArray);


        pInvestArray[0] = 50000 * (((1 + portoF(Number(paymentFrequency))) ^ 0.5) - 1) + ((50000 * ((1 + portoF(Number(paymentFrequency))) ^ 0.5) + 5000 - totalFeeArray[0]) ^ (((1 + portoF(Number(paymentFrequency))) ^ 0.5) - 1));
        pBalArray[0] = 50000 + 5000 + pInvestArray[0] - totalFeeArray[0];

        for (i = 1; i < yearArray.length; i++) {
            pInvestArray[i] = pBalArray[i - 1] * (((1 + portoF(Number(paymentFrequency))) ^ 0.5) - 1) + ((pBalArray[i - 1] * ((1 + portoF(Number(paymentFrequency))) ^ 0.5) + 5000 - totalFeeArray[0]) ^ (((1 + portoF(Number(paymentFrequency))) ^ 0.5) - 1))
            pBalArray[i] = pBalArray[i - 1] + 5000 + pInvestArray[i] - totalFeeArray[i];
        }

        console.log("pInvestArray", pInvestArray);
        console.log("pBalArray", pBalArray);


        From which year your are going to contribute into the portfolio ? 2016 // $scope.contStartYear

        childSchoolStart = childSchoolArray[0];
        for (i = 1; i < childSchoolArray.length; i++) {
            childSchoolStart = childSchoolStart > childSchoolArray[i] ? childSchoolArray[i] : childSchoolStart;
        }

        totalSchoolYears = max - childSchoolStart;

        console.log("childSchoolStart", childSchoolStart);
        console.log("totalSchoolYears", totalSchoolYears);


        rateOfReturn = portAnnualReturn[Number(paymentFrequency)];

        expctdPrsntValue=NPV(rateOfReturn,totalFeeArray) * (1+rateOfReturn)^($scope.contStartYear-$scope.begnYearInvestment);

        estmtdAnnualCont = expctdPrsntValue / (Math.abs(PV(rateOfReturn, childSchoolStart + totalSchoolYears - 1 - $scope.contStartYear + 1, 1, 0, 0)));

        console.log("rateOfReturn", rateOfReturn);
        console.log("totalSchoolYears", expctdPrsntValue);
        console.log("totalSchoolYears", estmtdAnnualCont);





        var q = childSchoolStart + totalSchoolYears - 1 - $scope.contStartYear + 1;

         console.log("q", q);

        for (i = 1; i <= q; i++) {
            dataYearArray[i - 1] = $scope.contStartYear + i - 1;
            dataContribMoney[i - 1] = estmtdAnnualCont;
            dataCashFlow[i - 1] = getTotalFeeValue(dataYearArray[i - 1]);
            if ((i - 1) == 0) {
                dataInvestReturn[i - 1] = 0;
                dataPortBalance[i - 1] = dataContribMoney[i - 1] - dataCashFlow[i - 1] + dataInvestReturn[i - 1];
            } else {
                dataInvestReturn[i - 1] = dataPortBalance[i - 2] * rateOfReturn;
                dataPortBalance[i - 1] = dataPortBalance[i - 1] + dataContribMoney[i - 1] - dataCashFlow[i - 1] + dataInvestReturn[i - 1];
            }

        }

        console.log("dataYearArray", dataYearArray);
        console.log("dataContribMoney", dataContribMoney);
        console.log("dataCashFlow", dataCashFlow);
        console.log("dataInvestReturn", dataInvestReturn);
        console.log("dataPortBalance", dataPortBalance);

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
