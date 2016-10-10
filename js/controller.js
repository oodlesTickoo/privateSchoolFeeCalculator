app.controller("TTRController", ['$scope', '$timeout', 'AgeCalculator', 'TaxRateCalculator', 'SGCRate', 'WithoutSSCalculator', 'WithSSCalculator', 'ChartServiceHc', 'DonutChartServiceHc', 'PdfMaker', function($scope, $timeout, AgeCalculator, TaxRateCalculator, SGCRate, WithoutSSCalculator, WithSSCalculator, ChartServiceHc, DonutChartServiceHc, PdfMaker) {

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

    $scope.begnYearInvestment = 2016;

    $scope.numChildren = 2;

    $scope.investmentReturn = 5000;

    $scope.investmentVolatility = 5000;

    $scope.schoolYear1 = 2017;

    $scope.schoolDuration1 = 10;

    $scope.schoolYear2 = 2017;

    $scope.schoolDuration2 = 10;

    $scope.schoolYear3 = 2017;

    $scope.schoolDuration3 = 10;

    $scope.schoolYear4 = 2017;

    $scope.schoolDuration4 = 10;

    $scope.schoolYear5 = 2017;

    $scope.schoolDuration5 = 10;

    $scope.schoolYear6 = 2017;

    $scope.schoolDuration6 = 10;

    var begnYearInvestmentSlider = document.getElementById("begnYearInvestmentSlider"),
        numChildrenSlider = document.getElementById("numChildrenSlider"),
        investmentReturnSlider = document.getElementById("investmentReturnSlider"),
        investmentVolatilitySlider = document.getElementById("investmentVolatilitySlider"),
        schoolYear1Slider = document.getElementById("schoolYear1Slider"),
        schoolDuration1Slider = document.getElementById("schoolDuration1Slider"),
        schoolYear2Slider = document.getElementById("schoolYear2Slider"),
        schoolDuration2Slider = document.getElementById("schoolDuration2Slider"),
        schoolYear3Slider = document.getElementById("schoolYear3Slider"),
        schoolDuration3Slider = document.getElementById("schoolDuration3Slider"),
        schoolYear4Slider = document.getElementById("schoolYear4Slider"),
        schoolDuration4Slider = document.getElementById("schoolDuration4Slider"),
        schoolYear5Slider = document.getElementById("schoolYear5Slider"),
        schoolDuration5Slider = document.getElementById("schoolDuration5Slider"),
        schoolYear6Slider = document.getElementById("schoolYear6Slider"),
        schoolDuration6Slider = document.getElementById("schoolDuration6Slider");

    var begnYearInvestmentInput = document.getElementById("begnYearInvestmentInput"),
        numChildrenInput = document.getElementById("numChildrenInput"),
        investmentReturnInput = document.getElementById("investmentReturnInput"),
        investmentVolatilityInput = document.getElementById("investmentVolatilityInput"),
        schoolYear1Input = document.getElementById("schoolYear1Input"),
        schoolDuration1Input = document.getElementById("schoolDuration1Input"),
        schoolYear2Input = document.getElementById("schoolYear2Input"),
        schoolDuration2Input = document.getElementById("schoolDuration2Input"),
        schoolYear3Input = document.getElementById("schoolYear3Input"),
        schoolDuration3Input = document.getElementById("schoolDuration3Input"),
        schoolYear4Input = document.getElementById("schoolYear4Input"),
        schoolDuration4Input = document.getElementById("schoolDuration4Input"),
        schoolYear5Input = document.getElementById("schoolYear5Input"),
        schoolDuration5Input = document.getElementById("schoolDuration5Input"),
        schoolYear6Input = document.getElementById("schoolYear6Input"),
        schoolDuration6Input = document.getElementById("schoolDuration6Input");

    noUiSlider.create(begnYearInvestmentSlider, {
        start: $scope.begnYearInvestment,
        connect: 'lower',
        range: {
            min: [2016],
            max: [2022],
        },
        format: wNumb({
            decimals: 0,
        }),
        step: 1
    });

    noUiSlider.create(numChildrenSlider, {
        start: $scope.numChildren,
        connect: 'lower',
        range: {
            min: [0],
            max: [6]
        },
        step: 1,
        format:wNumb({
            decimals:0
        })
    });

    noUiSlider.create(investmentReturnSlider, {
        start: $scope.investmentReturn,
        range: {
            min: [1000],
            max: [10000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect:'lower'
    });

    noUiSlider.create(investmentVolatilitySlider, {
        start: $scope.investmentVolatility,
        range: {
            min: [1000],
            max: [10000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect:'lower'
    });

    noUiSlider.create(schoolYear1Slider, {
        start: $scope.schoolYear1,
        connect: 'lower',
        range: {
            min: [2015],
            max: [2020]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })

    });

    noUiSlider.create(schoolYear2Slider, {
        start: $scope.schoolYear2,
        connect: 'lower',
        range: {
            min: [2015],
            max: [2020]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })

    });

    noUiSlider.create(schoolYear3Slider, {
        start: $scope.schoolYear3,
        connect: 'lower',
        range: {
            min: [2015],
            max: [2020]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })

    });

    noUiSlider.create(schoolYear4Slider, {
        start: $scope.schoolYear4,
        connect: 'lower',
        range: {
            min: [2015],
            max: [2020]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })

    });

    noUiSlider.create(schoolYear5Slider, {
        start: $scope.schoolYear5,
        connect: 'lower',
        range: {
            min: [2015],
            max: [2020]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })

    });

    noUiSlider.create(schoolYear6Slider, {
        start: $scope.schoolYear6,
        connect: 'lower',
        range: {
            min: [2015],
            max: [2020]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })

    });

    noUiSlider.create(schoolDuration1Slider, {
        start: $scope.schoolDuration1,
         connect: 'lower',
        range: {
            min: [1],
            max: [12]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })

    });

    noUiSlider.create(schoolDuration2Slider, {
        start: $scope.schoolDuration2,
        connect: 'lower',
        range: {
            min: [1],
            max: [12]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })

    });

    noUiSlider.create(schoolDuration3Slider, {
        start: $scope.schoolDuration3,
        connect: 'lower',
        range: {
            min: [1],
            max: [12]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })

    });

    noUiSlider.create(schoolDuration4Slider, {
        start: $scope.schoolDuration4,
        connect: 'lower',
        range: {
            min: [1],
            max: [12]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })

    });

    noUiSlider.create(schoolDuration5Slider, {
        start: $scope.schoolDuration5,
        connect: 'lower',
        range: {
            min: [1],
            max: [12]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })

    });

    noUiSlider.create(schoolDuration6Slider, {
        start: $scope.schoolDuration6,
        connect: 'lower',
        range: {
            min: [1],
            max: [12]
        },
        step: 1,
        format:wNumb({
            decimals : 0
        })
    });


    begnYearInvestmentSlider.noUiSlider.on('update', function(values, handle) {
        begnYearInvestmentInput.value = values[handle];
        $scope.begnYearInvestment = values[handle];
    });

    begnYearInvestmentInput.addEventListener("change", function() {
        begnYearInvestmentSlider.noUiSlider.set(this.value);
    });

        numChildrenSlider.noUiSlider.on('update', function(values, handle) {
        numChildrenInput.value = values[handle];
        $scope.numChildren = values[handle];
        // console.log($scope.numChildren);
        // console.log(typeof $scope.numChildren);
    });

    numChildrenInput.addEventListener("change", function() {
        numChildrenSlider.noUiSlider.set(numChildrenInput.value);
    });

        investmentReturnSlider.noUiSlider.on('update', function(values, handle) {
        investmentReturnInput.value = values[handle];
        $scope.investmentReturn = values[handle];
    });

    investmentReturnInput.addEventListener("change", function() {
        investmentReturnSlider.noUiSlider.set(investmentReturnInput.value);
    });

        investmentVolatilitySlider.noUiSlider.on('update', function(values, handle) {
        investmentVolatilityInput.value = values[handle];
        $scope.investmentVolatility = values[handle];
    });

    investmentVolatilityInput.addEventListener("change", function() {
        investmentVolatilitySlider.noUiSlider.set(investmentVolatilityInput.value);
    });

        schoolYear1Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear1Input.value = values[handle];
        $scope.schoolYear1 = values[handle];
    });

    schoolYear1Input.addEventListener("change", function() {
        schoolYear1Slider.noUiSlider.set(schoolYear1Input.value);
    });

        schoolYear2Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear2Input.value = values[handle];
        $scope.schoolYear2 = values[handle];
    });

    schoolYear2Input.addEventListener("change", function() {
        schoolYear2Slider.noUiSlider.set(schoolYear2Input.value);
    });

        schoolYear3Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear3Input.value = values[handle];
        $scope.schoolYear3 = values[handle];
    });

    schoolYear3Input.addEventListener("change", function() {
        schoolYear3Slider.noUiSlider.set(schoolYear3Input.value);
    });

        schoolYear4Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear4Input.value = values[handle];
        $scope.schoolYear4 = values[handle];
    });

    schoolYear4Input.addEventListener("change", function() {
        schoolYear4Slider.noUiSlider.set(schoolYear4Input.value);
    });

        schoolYear5Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear5Input.value = values[handle];
        $scope.schoolYear5 = values[handle];
    });

    schoolYear5Input.addEventListener("change", function() {
        schoolYear5Slider.noUiSlider.set(schoolYear5Input.value);
    });

        schoolYear6Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear6Input.value = values[handle];
        $scope.schoolYear6 = values[handle];
    });

    schoolYear6Input.addEventListener("change", function() {
        schoolYear6Slider.noUiSlider.set(schoolYear6Input.value);
    });

    //     schoolYear1Slider.noUiSlider.on('update', function(values, handle) {
    //     schoolYear1Input.value = values[handle];
    // });

    // schoolYear1Input.addEventListener("change", function() {
    //     schoolYear1Slider.noUiSlider.set(schoolYear1Input.value);
    // });

        schoolDuration1Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration1Input.value = values[handle];
        $scope.schoolDuration1 = values[handle];
    });

    schoolDuration1Input.addEventListener("change", function() {
        schoolDuration1Slider.noUiSlider.set(schoolDuration1Input.value);
    });

         schoolDuration2Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration2Input.value = values[handle];
        $scope.schoolDuration2 = values[handle];
    });

    schoolDuration2Input.addEventListener("change", function() {
        schoolDuration2Slider.noUiSlider.set(schoolDuration2Input.value);
    });

         schoolDuration3Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration3Input.value = values[handle];
        $scope.schoolDuration3 = values[handle];
    });

    schoolDuration3Input.addEventListener("change", function() {
        schoolDuration3Slider.noUiSlider.set(schoolDuration3Input.value);
    });

         schoolDuration4Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration4Input.value = values[handle];
        $scope.schoolDuration4 = values[handle];
    });

    schoolDuration4Input.addEventListener("change", function() {
        schoolDuration4Slider.noUiSlider.set(schoolDuration4Input.value);
    });

         schoolDuration5Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration5Input.value = values[handle];
        $scope.schoolDuration5 = values[handle];
    });

    schoolDuration5Input.addEventListener("change", function() {
        schoolDuration5Slider.noUiSlider.set(schoolDuration5Input.value);
    });

         schoolDuration6Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration6Input.value = values[handle];
        $scope.schoolDuration6 = values[handle];
    });

    schoolDuration6Input.addEventListener("change", function() {
        schoolDuration6Slider.noUiSlider.set(schoolDuration6Input.value);
    });

    $scope.indexlevel = 0.04;

    // $scope.grossAnnualIncome = 120000;
    // $scope.homeMortgage = 500000;
    // $scope.investmentPropertyMortgage = 0;
    // $scope.creditCardDebt = 2000;
    // $scope.carLoan = 20000;
    // $scope.personalLoan = 0;
    // $scope.otherLoan = 0;
    // $scope.homeValue = 800000;
    // $scope.cashAtBank = 20000;
    // $scope.otherInvestment = 20000;
    // $scope.superBalance = 100000;
    // $scope.ecLife = 250000;
    // $scope.ecTPD = 0;
    // $scope.ecIP = 0;
    // $scope.ecTrauma = 0;
    // $scope.numChildren = 2;
    // $scope.funeralCost = 20000;
    // $scope.educationExpensePerYearPerChild = 5000;
    // $scope.familyLivingCostPerYear = 90000;
    // $scope.inflation = 2;
    // $scope.rateOfReturn = 5;
    // $scope.moneyToBeBorrowed = 400000;
    // $scope.valueOfNewProperty = 500000;
    // $scope.ageSpouse = 47;
    // $scope.spouseSalary = 50000;
    // $scope.ageChildren1 = 3;
    // $scope.ageChildren2 = 5;
    // $scope.ageChildren3 = 10;
    // $scope.ageChildren4 = 10;
    // $scope.ageChildren5 = 10;
    // $scope.ageChildren6 = 10;
    // $scope.ageChildren7 = 10;
    // $scope.ageChildren8 = 10;


    // $scope.genderOption = true;
    // $scope.spouseOption = true;
    // $scope.smokeOption = false;
    // $scope.spouseWorkOption = true;
    // $scope.buyOption = true;


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

    function findOneTimeFee(temp) {

    }

    function findAnnualFee(temp) {

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
        }

        for (i = 0; i < numChildren; i++) {
            if (childStudyingArray[i] == true) {
                for (j = 0; j < childDurationArray[i]; j++) {
                    feeArray[i][j] = annualFeeArray[j] * ((1 + $scope.indexlevel) ^ (yearArray[j] - $scope.begnYearInvestment));
                }
            } else {
                temp = childSchoolArray[i] - min;
                feeArray[i][0] = annualFeeArray[0] + oneFeeArray[0] * ((1 + $scope.indexlevel) ^ temp);
                for (j = 1; j <= childDurationArray[i]; j++) {
                    feeArray[i][j] = annualFeeArray[j] * ((1 + $scope.indexlevel) ^ (yearArray[j] - $scope.begnYearInvestment));
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

    console.log(typeof $scope.investmentVolatility);
    console.log(typeof $scope.numChildren);


}]);
