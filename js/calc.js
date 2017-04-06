function FV(rate, nper, pmt, pv, type) {
    var pow = Math.pow(1 + rate, nper),
        fv;

    pv = pv || 0;
    type = type || 0;

    if (rate) {
        fv = (pmt * (1 + rate * type) * (1 - pow) / rate) - pv * pow;
    } else {
        fv = -1 * (pv + pmt * nper);
    }
    return fv;
}

var realRateReturn = 0.0156;
$scope.majorFeesListObj = [{ id: 0, name: "Major in Commerce" },
        { id: 1, name: "Major in Medical Science" },
        { id: 2, name: "Major in Art" }
    ];

var majorSelectedArray=[0, 0, 0, 0, 0, 0]
var publicSchol_avgCostArray = [1615.33, 1395, 471.25, 762.5, 950, 357.14, 390];
var commerceFeeArray = [10596, 10596, 10597, 10429, 13176, 10596, 10596];
var medicalScienceFeeArray = [9823, 10596, 9782, 9439.33, 9896, 10596, 10596];
var artFeeArray = [7511, 6349, 4239.67, 6935.67, 6524, 6349, 6349];
var majorSubject;
var loanValuationRatio = 0.8;
var avgSchool_AnnualFee;
var presentValue_PrivateSchoolFeeArray=[];
var presentValue_PublicSchoolFeeArray=[];
var savingFeeArray=[];
var savingAccumulationArray=[];
var univCostArray=[];
var projectedUnivFeeArray=[];
var remainderUnivFeeArray=[];
var propertyPurchasingPowerArray=[];

$('.spMajor1').on('change', function() {
        majorSelectedArray[0] = $('.spMajor1 option:selected').val();
        console.log("majorSelectedArray[0]", majorSelectedArray[0]);
        //calculateFinal();
    });
$('.spMajor2').on('change', function() {
        majorSelectedArray[1] = $('.spMajor2 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
$('.spMajor3').on('change', function() {
        majorSelectedArray[2] = $('.spMajor3 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
$('.spMajor4').on('change', function() {
        majorSelectedArray[3] = $('.spMajor4 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
$('.spMajor5').on('change', function() {
        majorSelectedArray[4] = $('.spMajor5 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
$('.spMajor6').on('change', function() {
        majorSelectedArray[5] = $('.spMajor6 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });


var countFeeArray = [0, 0, 0, 0, 0, 0];
for (i = 0; i < numChildren; i++) {
    var temp = 0
    for (j = 0; j < feeArray[i].length; j++) {
        temp = temp + feeArray[i][j];
    }
    countFeeArray[i] = temp;
}


for (i = 0; i < numChildren; i++) {
    avgSchool_AnnualFee = publicSchol_avgCostArray[spState];
    presentValue_PrivateSchoolFeeArray[i] = (Math.abs(PV(realRateReturn, countFeeArray[i], annualFeeArray[i]))) * (Math.pow((1 + realRateReturn), (childSchoolArray[i] - min))) + (oneFeeArray[i]) * (Math.pow((1 + realRateReturn), (childSchoolArray[i] - min)));
    presentValue_PublicSchoolFeeArray[i] = (Math.abs(PV(realRateReturn, countFeeArray[i], avgSchool_AnnualFee))) * (Math.pow((1 + realRateReturn), (childSchoolArray[i] - min)));
    savingFeeArray[i] = presentValue_PrivateSchoolFeeArray[i] - presentValue_PublicSchoolFeeArray[i];
    savingAccumulationArray[i] = (savingFeeArray[i]) * Math.pow((1 + realRateReturn), (childGradArray[i] - begnYearInvestment))
    univCostArray[i] = $scope.majorFeesListObj[majorSelectedArray[i]];
    projectedUnivFeeArray[i] = Math.abs(FV(realRateReturn, 3, (univCostArray[i]) * (Math.pow((1 + $scope.indexlevel), (childGradArray[i] - begnYearInvestment)))));
    remainderUnivFeeArray[i] = (savingAccumulationArray[i] * Math.pow((1 + realRateReturn), 3)) - projectedUnivFeeArray[i];
    propertyPurchasingPowerArray[i] = remainderUnivFeeArray[i] / (1 - loanValuationRatio);
}
