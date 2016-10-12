app.controller("TTRController", ['$scope', '$timeout', 'AgeCalculator', 'TaxRateCalculator', 'SGCRate', 'WithoutSSCalculator', 'WithSSCalculator', 'ChartServiceHc', 'DonutChartServiceHc', 'PdfMaker', function($scope, $timeout, AgeCalculator, TaxRateCalculator, SGCRate, WithoutSSCalculator, WithSSCalculator, ChartServiceHc, DonutChartServiceHc, PdfMaker) {

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

//     $scope.schoolNames = ["Sydney Grammar School Darlinghurst",
//     "PLC Sydney",
//     "SCEGGS Darlinghurst",
//     "The Scotts College Sydney",
//     "Pymble Ladies College",
//     "Ascham School",
//     "Abbotsleigh",
//     "St Aloysius College",
//     "Meridan School",
//     "Sydney Church of England Grammar School (SHORE)",
//     "Cranbrook School",
//     "Knox Grammar School",
//     "The Kings School",
//     "ST Ignatius' College",
//     "St Joseph's College ",
//     "Loreto Normanhurst",
//     "Loreto Kirribilli",
//     "Queenswood School for Girls",
//     "Roseville College",
//     "Parramatta Marist High School",
//     "Barker College",
//     "Ruyton Girls' School, Kew.",
//     "Shelford Girls' Grammar, Caulfield.",
//     "Fintona Girls' School, Balwyn.",
//     "Lauriston Girls' School, Aramadale.",
//     "Loreto Mandeville Hall, Toorak.",
//     "Prebyterian Ladies' College, Burwood.",
//     "Camberwell Girls' Grammar School, Canterbury.",
//     "Melbourne Girls Grammar School, South Yarra.",
//     "Mentone Girls' Grammar School, Mentone.",
//     "Korowa Anglican Girls' School Glen Iris.",
//     "Camberwell Grammar School, Canterbury.",
//     "Scotch College, Hawthorn. ",
//     "Melbourne Grammar School, South Yarra.",
//     "Caulfield Grammar School, St Kilda",
//     "Haileybury College, Keysborough.",
//     "Xavier College, Kew.",
//     "Trinity Grammar School, Kew.",
//     "St Kevin's College, Toorak.",
//     "Brighton Grammar School, Brighton",
//     "Firbank Grammar School, Brighton",
//     "St Leonard's College, Brighton East.",
//     "Brisbane Grammar School",
//     "Brisbane Girls Grammer School",
//     "Ormiston College",
//     "Somerville House",
//     "Brisbane Boys College",
//     "St Aidan's Anglican Girls School",
//     "Anglican Church Grammar School",
//     "Clayfield College",
//     "Cannon Hill Anglican College",
//     "Sheldon College",
//     "St Margarets Anglican Girls School",
//     "Hillbrook Anglican School",
//     "st peters lutheran college",
//     "Moreton Bay College",
//     "St Rita's College, Clayfield",
//     "The Southport School",
//     "St Joseph's College Gregory Terrace",
//     "The Lakes College",
//     "Redeemer Lutheran College",
//     "Moreton Bay Boys College",
//     "Wilderness School, Medindie.",
//     "St Peter's College ",
//     "St Peter's Girls Collegiate Girls' School",
//     "Walford Anglican School for Girls",
//     "Prince Alfred College",
//     "Seymour College",
//     "Pulteney Grammar School",
//     "St Aloysius College, Adelaide",
//     "St Dominics Priory College",
//     "St John's Grammar School",
//     "Woodcroft College",
//     "St Ignatious College, Adelaide",
//     "Pedare Christian College",
//     "Westminster School",
//     "Kings Baptist Grammar School",
//     "Scotch College Adelaide",
//     "Concordia College",
//     "Pembroke School",
//     "Loreto College, Marryatville",
//     "Trinity College, Gawler",
//     "Hale School",
//     "Christ Church Grammar School",
//     "All Saints College",
//     "St Mary's Anglican Girls School",
//     "St Hilda's Anglican Girls School",
//     "Presbyterian Ladies' College, Perth",
//     "Perth College",
//     "Guildford Grammar School ",
//     "Penrhos College",
//     "Scotch College, Perth",
//     "John XXIII College, Perth",
//     "Santa Maria College",
//     "Wesley College, Perth",
//     "Methodist Ladies College, Perth",
//     "St Marks Anglican Community School",
//     "Aquinas College, Perth",
//     "Trinity College, Perth",
//     "Sacred Heart College",
//     "Newman College Perth",
//     "Kingsway Christian College",
//     "Canberra Grammar School",
//     "Radford College",
//     "Canberra Girls Grammar School",
//     "Burgmann Anglican School",
//     "Brindabella Christian College",
//     "Marist College",
//     "Orana Steiner School",
//     "Merici College",
//     "Emmaus Christian School",
//     "The Friends School, Hobart",
//     "Fahan School",
//     "St Michael's Collegiate School",
//     "The Hutchins School",
//     "St Mary's College, Hobart",
//     "Launceston Chruch Grammar School",
//     "Launceston Christian School"
// ];

// var schoolAddress = ["College St- Darlinghurst NSW 2010",
//     "Boundary St- Croydon NSW 2132",
//     "215 Forbes St- Darlinghurst NSW 2010",
//     "Victoria Rd- Bellevue Hill NSW 2023",
//     "Avon Rd- Pymble NSW 2073",
//     "188 New South Head Rd- Edgecliff- NSW 2027",
//     "1666 Pacific Highway- Wahroonga- NSW 2076",
//     "47 Upper Pitt Street- Milsons Point 2061 NSW Australia",
//     "10-12 Redmyre Road- Strathfield NSW 2135",
//     "Blue Street- North Sydney- NSW- 2060- Australia",
//     "5 Victoria Road- Bellevue Hill NSW 2023 Australia",
//     "7 Woodville Ave- Wahroonga 2076 NSW Australia",
//     "87-129 PENNANT HILLS ROAD- NORTH PARRAMATTA- NSW 2151- AUSTRALIA",
//     "1 Tambourine Bay Road- NSW Lane Cove",
//     "Mark Street- Hunters Hill- NSW 2110",
//     "91-93 Pennant Hills Road- Normanhurst- Sydney- NSW 2076",
//     "85 Carabella Street- Kirribilli NSW 2061- Australia",
//     "47 Mandolong Rd- Mosman NSW 2088",
//     "27 Bancroft Avenue Roseville NSW 2069 Australia",
//     "2 DARCY ROAD- WESTMEAD NSW AUSTRALIA 2145",
//     "91 Pacific Highway Hornsby NSW 2077",
//     "12 Selbourne Rd- Kew VIC 3101",
//     "3 Hood Cres- Caulfield VIC 3161",
//     "79 Balwyn Rd- Balwyn VIC 3103",
//     "38 Huntingtower Rd- Armadale VIC 3143",
//     "10 Mandeville Cres- Toorak VIC 3142",
//     "141 Burwood Hwy- Burwood VIC 3125",
//     " 2 Torrington St- Canterbury VIC 3126",
//     "86 Anderson St- South Yarra VIC 3141",
//     "11 Mentone Parade- Mentone VIC 3194",
//     "10-16 Ranfurlie Cres- Glen Iris VIC 3146",
//     "55 Mont Albert Rd- Canterbury VIC 3126",
//     "1 Morrison St- Hawthorn VIC 3122",
//     "355 St Kilda Rd- Melbourne VIC 3004",
//     "217 Glen Eira Road- East St. Kilda- Melbourne- Victoria 3183",
//     "855 Springvale Road Keysborough VIC 3173",
//     "135 Barkers Road- Melbourne- Kew- Victoria",
//     "40 Charles St- Kew- Melbourne Victoria 3101",
//     "31 Moonga Rd- Toorak VIC 3142",
//     "90 Outer Cres- Brighton VIC 3186",
//     "51 Outer Crescent- Brighton VIC 3186",
//     "163 South Road- Brighton East VIC 3187",
//     "24 Gregory Terrace- Spring Hill QLD 4000",
//     "70 Gregory Terrace- Spring Hill QLD 4000",
//     "97 Dundas St W- Ormiston QLD 4160",
//     "17 Graham St- South Brisbane QLD 4101",
//     "Kensington Terrace- Toowong QLD 4066",
//     "11 Ruthven St- Corinda QLD 4075",
//     "Oaklands Parade- East Brisbane QLD 4169",
//     "23 Gregory Street- Clayfield QLD 4011",
//     "Junction Rd- Cannon Hill QLD 4170",
//     "Taylor Road- Sheldon- QLD 4157",
//     "11 Petrie St- Ascot QLD 4007",
//     "45 Hurdcotte Street Enoggera QLD 4051",
//     "66 Harts Rd- Indooroopilly QLD 4068",
//     "450 Wondall Rd- Manly West QLD 4179",
//     "41 Enderley Rd- Clayfield QLD 4011",
//     "2 Winchester St- Southport QLD 4215",
//     "Gregory Terrace- Brisbane- QLD 4000- Australia",
//     "2 College St- North Lakes QLD 4509",
//     "745 Rochedale Rd- Rochedale QLD 4123",
//     "302 Manly Rd- Manly West QLD 4179",
//     "30 Hawkers Rd- Medindie SA 5081",
//     "57 Hackney Rd- Hackney SA 5069",
//     "Stonyfell Rd- Stonyfell SA 5066",
//     "316 Unley Rd- Hyde Park SA 5061",
//     "23 Dequetteville Terrace- Kent Town SA 5067",
//     "546 Portrush Rd- Glen Osmond SA 5064",
//     "190 South Terrace ADELAIDE SA 5000",
//     "53 Wakefield St- Adelaide SA 5000",
//     "119/139 Molesworth St- North Adelaide SA 5006",
//     "29 Gloucester Ave- Belair SA 5052",
//     "143-173 Bains Rd- Morphett Vale SA 5162",
//     "2 Manresa Ct- Athelstone SA 5076",
//     "2-30 Surrey Farm Dr- Golden Grove SA 5125",
//     "1-27 Alison Avenue- Marion- South Australia ",
//     "no address",
//     "Carruth Road- Torrens Park South Australia 5062",
//     "45 Cheltenham St- Highgate SA 5063",
//     "342 The Parade- Kensington Park SA 5068",
//     "316 Portrush Rd- Marryatville SA 5068",
//     "Alexander Ave- Evanston South SA 5116",
//     "160 Hale Rd- Wembley Downs WA 6019",
//     "Queenslea Dr- Claremont WA 6010",
//     "Ewing Ave.- Bull Creek WA 6149",
//     "75 Elliott Rd- Karrinyup WA 6018",
//     "26 Bay View Terrace- Mosman Park WA 6012",
//     "14 McNeil St- Peppermint Grove WA 6011",
//     "31 Lawley Crescent- Mount Lawley WA 6050",
//     "11 Terrace Rd- Guildford WA 6055",
//     "6 Morrison Street- Como WA 6152",
//     "76 Shenton Rd- Swanbourne WA 6010",
//     "Mooro Dr- Mount Claremont WA 6010",
//     "18 Stoneham Rd- Attadale WA 6156",
//     "40 Coode St- South Perth WA 6151",
//     "356 Stirling Hwy- Claremont WA 6010",
//     "St Marks Dr- Hillarys WA 6025",
//     "58 Mount Henry Rd- Salter Point WA 6152",
//     "2 Trinity Ave- East Perth WA 6004",
//     "Hocking Parade- Sorrento WA 6020",
//     "216 Empire Ave- Churchlands WA 6018",
//     "157 Kingsway- Darch WA 6065",
//     "40 Monaro Cres- Red Hill ACT 2603",
//     "1 College St- Bruce ACT 2617",
//     "Melbourne Ave- Deakin ACT 2600",
//     "Gungahlin Dr & The Valley Avenue- Gungahlin ACT 291",
//     "136 Brigalow St- Lyneham ACT 2602",
//     "27 Marr St- Pearce ACT 2607",
//     "Unwin Place- ACT 2611",
//     "Wise St- Braddon ACT 2612",
//     "73 Davenport St- Dickson ACT 2602",
//     "23 Commercial Rd- North Hobart TAS 7000",
//     "Fisher Avenue- Lower Sandy Bay TAS 7005",
//     "218 Macquarie St- Hobart TAS 7000",
//     "71 Nelson Rd- Sandy Bay TAS 7005",
//     "164 Harrington St- Hobart TAS 7000",
//     "36 Button St- Mowbray TAS 7248",
//     " 452A W Tamar Hwy- Riverside TAS 7250"
// ];

// var schoolState = ["NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "NSW",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "VIC",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "QLD",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "SA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "WA",
//     "ACT",
//     "ACT",
//     "ACT",
//     "ACT",
//     "ACT",
//     "ACT",
//     "ACT",
//     "ACT",
//     "ACT",
//     "TAS",
//     "TAS",
//     "TAS",
//     "TAS",
//     "TAS",
//     "TAS",
//     "TAS"
// ];

// var schoolRegtn = [5489,
//     3415,
//     4950,
//     5500,
//     3430,
//     0,
//     0,
//     2650,
//     1825,
//     2400,
//     7300,
//     3000,
//     3850,
//     4530,
//     3300,
//     3330,
//     3220,
//     4220,
//     1220,
//     0,
//     3800,
//     1610,
//     1100,
//     1150,
//     1100,
//     1900,
//     1300,
//     1100,
//     1650,
//     1100,
//     900,
//     1330,
//     1600,
//     3900,
//     2100,
//     2500,
//     945,
//     2360,
//     3000,
//     2200,
//     1100,
//     1800,
//     2550,
//     2040,
//     795,
//     1530,
//     1960,
//     1300,
//     1930,
//     1135,
//     1250,
//     660,
//     1220,
//     1610,
//     1100,
//     1100,
//     1100,
//     1500,
//     2420,
//     500,
//     700,
//     1100,
//     1050,
//     2600,
//     970,
//     1095,
//     1100,
//     1050,
//     850,
//     600,
//     0,
//     688,
//     755,
//     975,
//     150,
//     800,
//     175,
//     1150,
//     75,
//     860,
//     745,
//     540,
//     8250,
//     6700,
//     5423.25,
//     5545,
//     4959,
//     4950,
//     5742,
//     2925,
//     5489,
//     6687,
//     2110,
//     1020,
//     7276,
//     5320,
//     2030,
//     2832,
//     2243,
//     805,
//     1110,
//     1320,
//     2975,
//     950,
//     150,
//     875,
//     700,
//     400,
//     550,
//     50,
//     300,
//     1200,
//     2100,
//     1110,
//     1610,
//     0,
//     100,
//     1300
// ];

// var schoolUpfrontF = [5489,
//     3415,
//     4950,
//     5500,
//     3430,
//     6300,
//     1970,
//     2650,
//     1825,
//     2400,
//     7300,
//     3000,
//     3850,
//     4530,
//     3300,
//     3330,
//     3220,
//     4220,
//     1220,
//     1220,
//     3800,
//     1610,
//     1100,
//     1150,
//     1100,
//     1900,
//     1300,
//     1100,
//     1650,
//     1100,
//     900,
//     1330,
//     1600,
//     3900,
//     2100,
//     2500,
//     945,
//     2360,
//     3000,
//     2200,
//     1100,
//     1800,
//     2550,
//     2040,
//     795,
//     1530,
//     1960,
//     1300,
//     1930,
//     1135,
//     1250,
//     660,
//     1220,
//     1610,
//     1100,
//     1100,
//     1100,
//     1500,
//     2420,
//     500,
//     700,
//     1100,
//     1050,
//     2600,
//     970,
//     1095,
//     1100,
//     1050,
//     850,
//     600,
//     0,
//     688,
//     755,
//     975,
//     150,
//     800,
//     175,
//     1150,
//     75,
//     860,
//     745,
//     540,
//     8250,
//     6700,
//     5423,
//     5545,
//     4959,
//     4950,
//     5742,
//     2925,
//     5489,
//     6687,
//     2110,
//     1020,
//     7276,
//     5320,
//     2030,
//     2832,
//     2243,
//     805,
//     1110,
//     1320,
//     2975,
//     950,
//     150,
//     875,
//     700,
//     400,
//     550,
//     50,
//     300,
//     1200,
//     2100,
//     1110,
//     1610,
//     0,
//     100,
//     1300
// ];

// var schoolAnnualF = [32644,
//     24411,
//     28348,
//     33925,
//     24002,
//     32000,
//     28640,
//     16278,
//     28340,
//     24126,
//     28325,
//     29430,
//     25345,
//     23880,
//     29040,
//     19179,
//     15645,
//     25171,
//     20735,
//     4473,
//     25140,
//     22360,
//     25518,
//     20399,
//     27160,
//     22398,
//     23479,
//     19051,
//     27746,
//     22354,
//     27138,
//     25600,
//     29912,
//     24885,
//     23789,
//     24702,
//     21957,
//     26349,
//     16290,
//     25247,
//     24769,
//     23415,
//     23000,
//     22520,
//     2527,
//     18292,
//     18434,
//     17272,
//     18813,
//     17031,
//     10386,
//     11479,
//     17762,
//     11092,
//     15806,
//     12532,
//     7120,
//     15030,
//     8215,
//     8415,
//     8979,
//     11023,
//     18888,
//     20520,
//     17285,
//     19301,
//     17319,
//     19679,
//     18946,
//     7636,
//     6674,
//     11811,
//     6297,
//     14013,
//     7502,
//     17932,
//     0,
//     19668,
//     8820,
//     19690,
//     14664,
//     4622,
//     21450,
//     23088,
//     16534,
//     18394,
//     20284,
//     20982,
//     18701,
//     18073,
//     19442,
//     23499,
//     7710,
//     10521,
//     20001,
//     21203,
//     7251,
//     14013,
//     13602,
//     8220,
//     5715,
//     7288,
//     18753,
//     12307,
//     16942,
//     8413,
//     5874,
//     8644,
//     6467,
//     6277,
//     6292,
//     14254,
//     12412,
//     12908,
//     13400,
//     3958,
//     12900,
//     4802
// ];

// var schoolTuitionF = [32644.00,
//     24360.00,
//     28348.15,
//     33925.00,
//     24001.9230769231,
//     32000.00,
//     0.00,
//     16278.40,
//     28340.00,
//     24126.15,
//     28325.08,
//     29430.00,
//     25345.07,
//     23880.00,
//     29040.00,
//     19179.00,
//     15645.00,
//     25170.77,
//     20735.38,
//     4473.00,
//     24959.23,
//     22360,
//     25518,
//     20399.1428571429,
//     27159.5,
//     22397.7692307692,
//     23479.3846153846,
//     19051.3076923077,
//     27746.1538461538,
//     22354.4615384615,
//     27138,
//     25600,
//     29911.5,
//     24884.6153846154,
//     23789.3076923077,
//     24702.3076923077,
//     21956.6923076923,
//     26348.6153846154,
//     16290,
//     25246.8461538462,
//     24768.9230769231,
//     23414.7692307692,
//     23000,
//     22520,
//     2527.2307692308,
//     18292.3076923077,
//     18434.1538461538,
//     17272,
//     18812.6153846154,
//     17030.7692307692,
//     10385.5384615385,
//     11479,
//     17762.1538461538,
//     11092,
//     15806.1538461538,
//     12531.9230769231,
//     7120,
//     15029.5846153846,
//     8215.3846153846,
//     8414.7692307692,
//     8979.2307692308,
//     11023.0769230769,
//     18887.5384615385,
//     20520,
//     17284.6153846154,
//     19301.1538461538,
//     17319.2307692308,
//     19679.2307692308,
//     18946.1538461538,
//     7636.0769230769,
//     6673.8461538462,
//     11811.4615384615,
//     6297.3076923077,
//     14013.2307692308,
//     7502.1538461539,
//     17932,
//     0,
//     19667.6923076923,
//     8820.3076923077,
//     19689.6923076923,
//     14664.2307692308,
//     4621.6153846154,
//     21450,
//     23087.6923076923,
//     16534.2307692308,
//     18393.8461538462,
//     20283.5384615385,
//     20981.8461538461,
//     18700.6153846154,
//     18072.6923076923,
//     19441.9230769231,
//     23499.0769230769,
//     7710,
//     10520.625,
//     20001,
//     21203.0769230769,
//     7250.7692307692,
//     14013,
//     13601.6666666667,
//     8219.5,
//     5714.6153846154,
//     7288.0769230769,
//     18753.0769230769,
//     12306.9230769231,
//     16941.5384615385,
//     8413.4615384615,
//     5873.8461538462,
//     8644,
//     6467.3076923077,
//     6277.1428571429,
//     6291.8181818182,
//     14253.85,
//     12412.31,
//     12907.69,
//     13400.00,
//     3957.69,
//     12900.00,
//     4801.54
// ];

// for(var i=0; i <$scope.schoolNames.length;i++){
//     console.log(
//         "{ id: " + i + ", name: '" + $scope.schoolNames[i] + "', address: '" + schoolAddress[i] + 
//         "', state: '" + schoolState[i] + "', regFees:" + schoolRegtn[i] + ", upfrontFee:" + schoolUpfrontF[i] +
//         ", annualFee:" + schoolAnnualF[i] + ", tuitionFee:" + schoolTuitionF[i] + " }"  
//         );
// }

$scope.schoolObjects=[
 { id: 0, name: 'Sydney Grammar School Darlinghurst', address: 'College St- Darlinghurst NSW 2010', state: 'NSW', regFees:5489, upfrontFee:5489, annualFee:32644, tuitionFee:32644 }
,{ id: 1, name: 'PLC Sydney', address: 'Boundary St- Croydon NSW 2132', state: 'NSW', regFees:3415, upfrontFee:3415, annualFee:24411, tuitionFee:24360 }
,{ id: 2, name: 'SCEGGS Darlinghurst', address: '215 Forbes St- Darlinghurst NSW 2010', state: 'NSW', regFees:4950, upfrontFee:4950, annualFee:28348, tuitionFee:28348.15 }
,{ id: 3, name: 'The Scotts College Sydney', address: 'Victoria Rd- Bellevue Hill NSW 2023', state: 'NSW', regFees:5500, upfrontFee:5500, annualFee:33925, tuitionFee:33925 }
,{ id: 4, name: 'Pymble Ladies College', address: 'Avon Rd- Pymble NSW 2073', state: 'NSW', regFees:3430, upfrontFee:3430, annualFee:24002, tuitionFee:24001.9230769231 }
,{ id: 5, name: 'Ascham School', address: '188 New South Head Rd- Edgecliff- NSW 2027', state: 'NSW', regFees:0, upfrontFee:6300, annualFee:32000, tuitionFee:32000 }
,{ id: 6, name: 'Abbotsleigh', address: '1666 Pacific Highway- Wahroonga- NSW 2076', state: 'NSW', regFees:0, upfrontFee:1970, annualFee:28640, tuitionFee:0 }
,{ id: 7, name: 'St Aloysius College', address: '47 Upper Pitt Street- Milsons Point 2061 NSW Australia', state: 'NSW', regFees:2650, upfrontFee:2650, annualFee:16278, tuitionFee:16278.4 }
,{ id: 8, name: 'Meridan School', address: '10-12 Redmyre Road- Strathfield NSW 2135', state: 'NSW', regFees:1825, upfrontFee:1825, annualFee:28340, tuitionFee:28340 }
,{ id: 9, name: 'Sydney Church of England Grammar School (SHORE)', address: 'Blue Street- North Sydney- NSW- 2060- Australia', state: 'NSW', regFees:2400, upfrontFee:2400, annualFee:24126, tuitionFee:24126.15 }
,{ id: 10, name: 'Cranbrook School', address: '5 Victoria Road- Bellevue Hill NSW 2023 Australia', state: 'NSW', regFees:7300, upfrontFee:7300, annualFee:28325, tuitionFee:28325.08 }
,{ id: 11, name: 'Knox Grammar School', address: '7 Woodville Ave- Wahroonga 2076 NSW Australia', state: 'NSW', regFees:3000, upfrontFee:3000, annualFee:29430, tuitionFee:29430 }
,{ id: 12, name: 'The Kings School', address: '87-129 PENNANT HILLS ROAD- NORTH PARRAMATTA- NSW 2151- AUSTRALIA', state: 'NSW', regFees:3850, upfrontFee:3850, annualFee:25345, tuitionFee:25345.07 }
,{ id: 13, name: "ST Ignatius' College", address: '1 Tambourine Bay Road- NSW Lane Cove', state: 'NSW', regFees:4530, upfrontFee:4530, annualFee:23880, tuitionFee:23880 }
,{ id: 14, name: "St Joseph's College", address: 'Mark Street- Hunters Hill- NSW 2110', state: 'NSW', regFees:3300, upfrontFee:3300, annualFee:29040, tuitionFee:29040 }
,{ id: 15, name: 'Loreto Normanhurst', address: '91-93 Pennant Hills Road- Normanhurst- Sydney- NSW 2076', state: 'NSW', regFees:3330, upfrontFee:3330, annualFee:19179, tuitionFee:19179 }
,{ id: 16, name: 'Loreto Kirribilli', address: '85 Carabella Street- Kirribilli NSW 2061- Australia', state: 'NSW', regFees:3220, upfrontFee:3220, annualFee:15645, tuitionFee:15645 }
,{ id: 17, name: 'Queenswood School for Girls', address: '47 Mandolong Rd- Mosman NSW 2088', state: 'NSW', regFees:4220, upfrontFee:4220, annualFee:25171, tuitionFee:25170.77 }
,{ id: 18, name: 'Roseville College', address: '27 Bancroft Avenue Roseville NSW 2069 Australia', state: 'NSW', regFees:1220, upfrontFee:1220, annualFee:20735, tuitionFee:20735.38 }
,{ id: 19, name: 'Parramatta Marist High School', address: '2 DARCY ROAD- WESTMEAD NSW AUSTRALIA 2145', state: 'NSW', regFees:0, upfrontFee:1220, annualFee:4473, tuitionFee:4473 }
,{ id: 20, name: 'Barker College', address: '91 Pacific Highway Hornsby NSW 2077', state: 'NSW', regFees:3800, upfrontFee:3800, annualFee:25140, tuitionFee:24959.23 }
,{ id: 21, name: "Ruyton Girls' School, Kew.", address: '12 Selbourne Rd- Kew VIC 3101', state: 'VIC', regFees:1610, upfrontFee:1610, annualFee:22360, tuitionFee:22360 }
,{ id: 22, name: "Shelford Girls' Grammar, Caulfield.", address: '3 Hood Cres- Caulfield VIC 3161', state: 'VIC', regFees:1100, upfrontFee:1100, annualFee:25518, tuitionFee:25518 }
,{ id: 23, name: "Fintona Girls' School, Balwyn.", address: '79 Balwyn Rd- Balwyn VIC 3103', state: 'VIC', regFees:1150, upfrontFee:1150, annualFee:20399, tuitionFee:20399.1428571429 }
,{ id: 24, name: "Lauriston Girls' School, Aramadale.", address: '38 Huntingtower Rd- Armadale VIC 3143', state: 'VIC', regFees:1100, upfrontFee:1100, annualFee:27160, tuitionFee:27159.5 }
,{ id: 25, name: 'Loreto Mandeville Hall, Toorak.', address: '10 Mandeville Cres- Toorak VIC 3142', state: 'VIC', regFees:1900, upfrontFee:1900, annualFee:22398, tuitionFee:22397.7692307692 }
,{ id: 26, name: "Prebyterian Ladies' College, Burwood.", address: '141 Burwood Hwy- Burwood VIC 3125', state: 'VIC', regFees:1300, upfrontFee:1300, annualFee:23479, tuitionFee:23479.3846153846 }
,{ id: 27, name: "Camberwell Girls' Grammar School, Canterbury.", address: ' 2 Torrington St- Canterbury VIC 3126', state: 'VIC', regFees:1100, upfrontFee:1100, annualFee:19051, tuitionFee:19051.3076923077 }
,{ id: 28, name: "Melbourne Girls Grammar School, South Yarra.", address: '86 Anderson St- South Yarra VIC 3141', state: 'VIC', regFees:1650, upfrontFee:1650, annualFee:27746, tuitionFee:27746.1538461538 }
,{ id: 29, name: "Mentone Girls' Grammar School, Mentone.", address: '11 Mentone Parade- Mentone VIC 3194', state: 'VIC', regFees:1100, upfrontFee:1100, annualFee:22354, tuitionFee:22354.4615384615 }
,{ id: 30, name: "Korowa Anglican Girls' School Glen Iris.", address: '10-16 Ranfurlie Cres- Glen Iris VIC 3146', state: 'VIC', regFees:900, upfrontFee:900, annualFee:27138, tuitionFee:27138 }
,{ id: 31, name: 'Camberwell Grammar School, Canterbury.', address: '55 Mont Albert Rd- Canterbury VIC 3126', state: 'VIC', regFees:1330, upfrontFee:1330, annualFee:25600, tuitionFee:25600 }
,{ id: 32, name: 'Scotch College, Hawthorn. ', address: '1 Morrison St- Hawthorn VIC 3122', state: 'VIC', regFees:1600, upfrontFee:1600, annualFee:29912, tuitionFee:29911.5 }
,{ id: 33, name: 'Melbourne Grammar School, South Yarra.', address: '355 St Kilda Rd- Melbourne VIC 3004', state: 'VIC', regFees:3900, upfrontFee:3900, annualFee:24885, tuitionFee:24884.6153846154 }
,{ id: 34, name: 'Caulfield Grammar School, St Kilda', address: '217 Glen Eira Road- East St. Kilda- Melbourne- Victoria 3183', state: 'VIC', regFees:2100, upfrontFee:2100, annualFee:23789, tuitionFee:23789.3076923077 }
,{ id: 35, name: 'Haileybury College, Keysborough.', address: '855 Springvale Road Keysborough VIC 3173', state: 'VIC', regFees:2500, upfrontFee:2500, annualFee:24702, tuitionFee:24702.3076923077 }
,{ id: 36, name: 'Xavier College, Kew.', address: '135 Barkers Road- Melbourne- Kew- Victoria', state: 'VIC', regFees:945, upfrontFee:945, annualFee:21957, tuitionFee:21956.6923076923 }
,{ id: 37, name: 'Trinity Grammar School, Kew.', address: '40 Charles St- Kew- Melbourne Victoria 3101', state: 'VIC', regFees:2360, upfrontFee:2360, annualFee:26349, tuitionFee:26348.6153846154 }
,{ id: 38, name: "St Kevin's College, Toorak.", address: '31 Moonga Rd- Toorak VIC 3142', state: 'VIC', regFees:3000, upfrontFee:3000, annualFee:16290, tuitionFee:16290 }
,{ id: 39, name: 'Brighton Grammar School, Brighton', address: '90 Outer Cres- Brighton VIC 3186', state: 'VIC', regFees:2200, upfrontFee:2200, annualFee:25247, tuitionFee:25246.8461538462 }
,{ id: 40, name: 'Firbank Grammar School, Brighton', address: '51 Outer Crescent- Brighton VIC 3186', state: 'VIC', regFees:1100, upfrontFee:1100, annualFee:24769, tuitionFee:24768.9230769231 }
,{ id: 41, name: "St Leonard's College, Brighton East.", address: '163 South Road- Brighton East VIC 3187', state: 'VIC', regFees:1800, upfrontFee:1800, annualFee:23415, tuitionFee:23414.7692307692 }
,{ id: 42, name: 'Brisbane Grammar School', address: '24 Gregory Terrace- Spring Hill QLD 4000', state: 'QLD', regFees:2550, upfrontFee:2550, annualFee:23000, tuitionFee:23000 }
,{ id: 43, name: 'Brisbane Girls Grammer School', address: '70 Gregory Terrace- Spring Hill QLD 4000', state: 'QLD', regFees:2040, upfrontFee:2040, annualFee:22520, tuitionFee:22520 }
,{ id: 44, name: 'Ormiston College', address: '97 Dundas St W- Ormiston QLD 4160', state: 'QLD', regFees:795, upfrontFee:795, annualFee:2527, tuitionFee:2527.2307692308 }
,{ id: 45, name: 'Somerville House', address: '17 Graham St- South Brisbane QLD 4101', state: 'QLD', regFees:1530, upfrontFee:1530, annualFee:18292, tuitionFee:18292.3076923077 }
,{ id: 46, name: 'Brisbane Boys College', address: 'Kensington Terrace- Toowong QLD 4066', state: 'QLD', regFees:1960, upfrontFee:1960, annualFee:18434, tuitionFee:18434.1538461538 }
,{ id: 47, name: "St Aidan's Anglican Girls School", address: '11 Ruthven St- Corinda QLD 4075', state: 'QLD', regFees:1300, upfrontFee:1300, annualFee:17272, tuitionFee:17272 }
,{ id: 48, name: 'Anglican Church Grammar School', address: 'Oaklands Parade- East Brisbane QLD 4169', state: 'QLD', regFees:1930, upfrontFee:1930, annualFee:18813, tuitionFee:18812.6153846154 }
,{ id: 49, name: 'Clayfield College', address: '23 Gregory Street- Clayfield QLD 4011', state: 'QLD', regFees:1135, upfrontFee:1135, annualFee:17031, tuitionFee:17030.7692307692 }
,{ id: 50, name: 'Cannon Hill Anglican College', address: 'Junction Rd- Cannon Hill QLD 4170', state: 'QLD', regFees:1250, upfrontFee:1250, annualFee:10386, tuitionFee:10385.5384615385 }
,{ id: 51, name: 'Sheldon College', address: 'Taylor Road- Sheldon- QLD 4157', state: 'QLD', regFees:660, upfrontFee:660, annualFee:11479, tuitionFee:11479 }
,{ id: 52, name: 'St Margarets Anglican Girls School', address: '11 Petrie St- Ascot QLD 4007', state: 'QLD', regFees:1220, upfrontFee:1220, annualFee:17762, tuitionFee:17762.1538461538 }
,{ id: 53, name: 'Hillbrook Anglican School', address: '45 Hurdcotte Street Enoggera QLD 4051', state: 'QLD', regFees:1610, upfrontFee:1610, annualFee:11092, tuitionFee:11092 }
,{ id: 54, name: 'st peters lutheran college', address: '66 Harts Rd- Indooroopilly QLD 4068', state: 'QLD', regFees:1100, upfrontFee:1100, annualFee:15806, tuitionFee:15806.1538461538 }
,{ id: 55, name: 'Moreton Bay College', address: '450 Wondall Rd- Manly West QLD 4179', state: 'QLD', regFees:1100, upfrontFee:1100, annualFee:12532, tuitionFee:12531.9230769231 }
,{ id: 56, name: "St Rita's College, Clayfield", address: '41 Enderley Rd- Clayfield QLD 4011', state: 'QLD', regFees:1100, upfrontFee:1100, annualFee:7120, tuitionFee:7120 }
,{ id: 57, name: 'The Southport School', address: '2 Winchester St- Southport QLD 4215', state: 'QLD', regFees:1500, upfrontFee:1500, annualFee:15030, tuitionFee:15029.5846153846 }
,{ id: 58, name: "St Joseph's College Gregory Terrace", address: 'Gregory Terrace- Brisbane- QLD 4000- Australia', state: 'QLD', regFees:2420, upfrontFee:2420, annualFee:8215, tuitionFee:8215.3846153846 }
,{ id: 59, name: 'The Lakes College', address: '2 College St- North Lakes QLD 4509', state: 'QLD', regFees:500, upfrontFee:500, annualFee:8415, tuitionFee:8414.7692307692 }
,{ id: 60, name: 'Redeemer Lutheran College', address: '745 Rochedale Rd- Rochedale QLD 4123', state: 'QLD', regFees:700, upfrontFee:700, annualFee:8979, tuitionFee:8979.2307692308 }
,{ id: 61, name: 'Moreton Bay Boys College', address: '302 Manly Rd- Manly West QLD 4179', state: 'QLD', regFees:1100, upfrontFee:1100, annualFee:11023, tuitionFee:11023.0769230769 }
,{ id: 62, name: 'Wilderness School, Medindie.', address: '30 Hawkers Rd- Medindie SA 5081', state: 'SA', regFees:1050, upfrontFee:1050, annualFee:18888, tuitionFee:18887.5384615385 }
,{ id: 63, name: "St Peter's College ", address: '57 Hackney Rd- Hackney SA 5069', state: 'SA', regFees:2600, upfrontFee:2600, annualFee:20520, tuitionFee:20520 }
,{ id: 64, name: "St Peter's Girls Collegiate Girls' School", address: 'Stonyfell Rd- Stonyfell SA 5066', state: 'SA', regFees:970, upfrontFee:970, annualFee:17285, tuitionFee:17284.6153846154 }
,{ id: 65, name: 'Walford Anglican School for Girls', address: '316 Unley Rd- Hyde Park SA 5061', state: 'SA', regFees:1095, upfrontFee:1095, annualFee:19301, tuitionFee:19301.1538461538 }
,{ id: 66, name: 'Prince Alfred College', address: '23 Dequetteville Terrace- Kent Town SA 5067', state: 'SA', regFees:1100, upfrontFee:1100, annualFee:17319, tuitionFee:17319.2307692308 }
,{ id: 67, name: 'Seymour College', address: '546 Portrush Rd- Glen Osmond SA 5064', state: 'SA', regFees:1050, upfrontFee:1050, annualFee:19679, tuitionFee:19679.2307692308 }
,{ id: 68, name: 'Pulteney Grammar School', address: '190 South Terrace ADELAIDE SA 5000', state: 'SA', regFees:850, upfrontFee:850, annualFee:18946, tuitionFee:18946.1538461538 }
,{ id: 69, name: 'St Aloysius College, Adelaide', address: '53 Wakefield St- Adelaide SA 5000', state: 'SA', regFees:600, upfrontFee:600, annualFee:7636, tuitionFee:7636.0769230769 }
,{ id: 70, name: 'St Dominics Priory College', address: '119/139 Molesworth St- North Adelaide SA 5006', state: 'SA', regFees:0, upfrontFee:0, annualFee:6674, tuitionFee:6673.8461538462 }
,{ id: 71, name: "St John's Grammar School", address: '29 Gloucester Ave- Belair SA 5052', state: 'SA', regFees:688, upfrontFee:688, annualFee:11811, tuitionFee:11811.4615384615 }
,{ id: 72, name: 'Woodcroft College', address: '143-173 Bains Rd- Morphett Vale SA 5162', state: 'SA', regFees:755, upfrontFee:755, annualFee:6297, tuitionFee:6297.3076923077 }
,{ id: 73, name: 'St Ignatious College, Adelaide', address: '2 Manresa Ct- Athelstone SA 5076', state: 'SA', regFees:975, upfrontFee:975, annualFee:14013, tuitionFee:14013.2307692308 }
,{ id: 74, name: 'Pedare Christian College', address: '2-30 Surrey Farm Dr- Golden Grove SA 5125', state: 'SA', regFees:150, upfrontFee:150, annualFee:7502, tuitionFee:7502.1538461539 }
,{ id: 75, name: 'Westminster School', address: '1-27 Alison Avenue- Marion- South Australia ', state: 'SA', regFees:800, upfrontFee:800, annualFee:17932, tuitionFee:17932 }
,{ id: 76, name: 'Kings Baptist Grammar School', address: 'no address', state: 'SA', regFees:175, upfrontFee:175, annualFee:0, tuitionFee:0 }
,{ id: 77, name: 'Scotch College Adelaide', address: 'Carruth Road- Torrens Park South Australia 5062', state: 'SA', regFees:1150, upfrontFee:1150, annualFee:19668, tuitionFee:19667.6923076923 }
,{ id: 78, name: 'Concordia College', address: '45 Cheltenham St- Highgate SA 5063', state: 'SA', regFees:75, upfrontFee:75, annualFee:8820, tuitionFee:8820.3076923077 }
,{ id: 79, name: 'Pembroke School', address: '342 The Parade- Kensington Park SA 5068', state: 'SA', regFees:860, upfrontFee:860, annualFee:19690, tuitionFee:19689.6923076923 }
,{ id: 80, name: 'Loreto College, Marryatville', address: '316 Portrush Rd- Marryatville SA 5068', state: 'SA', regFees:745, upfrontFee:745, annualFee:14664, tuitionFee:14664.2307692308 }
,{ id: 81, name: 'Trinity College, Gawler', address: 'Alexander Ave- Evanston South SA 5116', state: 'SA', regFees:540, upfrontFee:540, annualFee:4622, tuitionFee:4621.6153846154 }
,{ id: 82, name: 'Hale School', address: '160 Hale Rd- Wembley Downs WA 6019', state: 'WA', regFees:8250, upfrontFee:8250, annualFee:21450, tuitionFee:21450 }
,{ id: 83, name: 'Christ Church Grammar School', address: 'Queenslea Dr- Claremont WA 6010', state: 'WA', regFees:6700, upfrontFee:6700, annualFee:23088, tuitionFee:23087.6923076923 }
,{ id: 84, name: 'All Saints College', address: 'Ewing Ave.- Bull Creek WA 6149', state: 'WA', regFees:5423.25, upfrontFee:5423, annualFee:16534, tuitionFee:16534.2307692308 }
,{ id: 85, name: "St Mary's Anglican Girls School", address: '75 Elliott Rd- Karrinyup WA 6018', state: 'WA', regFees:5545, upfrontFee:5545, annualFee:18394, tuitionFee:18393.8461538462 }
,{ id: 86, name: "St Hilda's Anglican Girls School", address: '26 Bay View Terrace- Mosman Park WA 6012', state: 'WA', regFees:4959, upfrontFee:4959, annualFee:20284, tuitionFee:20283.5384615385 }
,{ id: 87, name: "Presbyterian Ladies' College, Perth", address: '14 McNeil St- Peppermint Grove WA 6011', state: 'WA', regFees:4950, upfrontFee:4950, annualFee:20982, tuitionFee:20981.8461538461 }
,{ id: 88, name: 'Perth College', address: '31 Lawley Crescent- Mount Lawley WA 6050', state: 'WA', regFees:5742, upfrontFee:5742, annualFee:18701, tuitionFee:18700.6153846154 }
,{ id: 89, name: 'Guildford Grammar School ', address: '11 Terrace Rd- Guildford WA 6055', state: 'WA', regFees:2925, upfrontFee:2925, annualFee:18073, tuitionFee:18072.6923076923 }
,{ id: 90, name: 'Penrhos College', address: '6 Morrison Street- Como WA 6152', state: 'WA', regFees:5489, upfrontFee:5489, annualFee:19442, tuitionFee:19441.9230769231 }
,{ id: 91, name: 'Scotch College, Perth', address: '76 Shenton Rd- Swanbourne WA 6010', state: 'WA', regFees:6687, upfrontFee:6687, annualFee:23499, tuitionFee:23499.0769230769 }
,{ id: 92, name: 'John XXIII College, Perth', address: 'Mooro Dr- Mount Claremont WA 6010', state: 'WA', regFees:2110, upfrontFee:2110, annualFee:7710, tuitionFee:7710 }
,{ id: 93, name: 'Santa Maria College', address: '18 Stoneham Rd- Attadale WA 6156', state: 'WA', regFees:1020, upfrontFee:1020, annualFee:10521, tuitionFee:10520.625 }
,{ id: 94, name: 'Wesley College, Perth', address: '40 Coode St- South Perth WA 6151', state: 'WA', regFees:7276, upfrontFee:7276, annualFee:20001, tuitionFee:20001 }
,{ id: 95, name: 'Methodist Ladies College, Perth', address: '356 Stirling Hwy- Claremont WA 6010', state: 'WA', regFees:5320, upfrontFee:5320, annualFee:21203, tuitionFee:21203.0769230769 }
,{ id: 96, name: 'St Marks Anglican Community School', address: 'St Marks Dr- Hillarys WA 6025', state: 'WA', regFees:2030, upfrontFee:2030, annualFee:7251, tuitionFee:7250.7692307692 }
,{ id: 97, name: 'Aquinas College, Perth', address: '58 Mount Henry Rd- Salter Point WA 6152', state: 'WA', regFees:2832, upfrontFee:2832, annualFee:14013, tuitionFee:14013 }
,{ id: 98, name: 'Trinity College, Perth', address: '2 Trinity Ave- East Perth WA 6004', state: 'WA', regFees:2243, upfrontFee:2243, annualFee:13602, tuitionFee:13601.6666666667 }
,{ id: 99, name: 'Sacred Heart College', address: 'Hocking Parade- Sorrento WA 6020', state: 'WA', regFees:805, upfrontFee:805, annualFee:8220, tuitionFee:8219.5 }
,{ id: 100, name: 'Newman College Perth', address: '216 Empire Ave- Churchlands WA 6018', state: 'WA', regFees:1110, upfrontFee:1110, annualFee:5715, tuitionFee:5714.6153846154 }
,{ id: 101, name: 'Kingsway Christian College', address: '157 Kingsway- Darch WA 6065', state: 'WA', regFees:1320, upfrontFee:1320, annualFee:7288, tuitionFee:7288.0769230769 }
,{ id: 102, name: 'Canberra Grammar School', address: '40 Monaro Cres- Red Hill ACT 2603', state: 'ACT', regFees:2975, upfrontFee:2975, annualFee:18753, tuitionFee:18753.0769230769 }
,{ id: 103, name: 'Radford College', address: '1 College St- Bruce ACT 2617', state: 'ACT', regFees:950, upfrontFee:950, annualFee:12307, tuitionFee:12306.9230769231 }
,{ id: 104, name: 'Canberra Girls Grammar School', address: 'Melbourne Ave- Deakin ACT 2600', state: 'ACT', regFees:150, upfrontFee:150, annualFee:16942, tuitionFee:16941.5384615385 }
,{ id: 105, name: 'Burgmann Anglican School', address: 'Gungahlin Dr & The Valley Avenue- Gungahlin ACT 291', state: 'ACT', regFees:875, upfrontFee:875, annualFee:8413, tuitionFee:8413.4615384615 }
,{ id: 106, name: 'Brindabella Christian College', address: '136 Brigalow St- Lyneham ACT 2602', state: 'ACT', regFees:700, upfrontFee:700, annualFee:5874, tuitionFee:5873.8461538462 }
,{ id: 107, name: 'Marist College', address: '27 Marr St- Pearce ACT 2607', state: 'ACT', regFees:400, upfrontFee:400, annualFee:8644, tuitionFee:8644 }
,{ id: 108, name: 'Orana Steiner School', address: 'Unwin Place- ACT 2611', state: 'ACT', regFees:550, upfrontFee:550, annualFee:6467, tuitionFee:6467.3076923077 }
,{ id: 109, name: 'Merici College', address: 'Wise St- Braddon ACT 2612', state: 'ACT', regFees:50, upfrontFee:50, annualFee:6277, tuitionFee:6277.1428571429 }
,{ id: 110, name: 'Emmaus Christian School', address: '73 Davenport St- Dickson ACT 2602', state: 'ACT', regFees:300, upfrontFee:300, annualFee:6292, tuitionFee:6291.8181818182 }
,{ id: 111, name: 'The Friends School, Hobart', address: '23 Commercial Rd- North Hobart TAS 7000', state: 'TAS', regFees:1200, upfrontFee:1200, annualFee:14254, tuitionFee:14253.85 }
,{ id: 112, name: 'Fahan School', address: 'Fisher Avenue- Lower Sandy Bay TAS 7005', state: 'TAS', regFees:2100, upfrontFee:2100, annualFee:12412, tuitionFee:12412.31 }
,{ id: 113, name: "St Michael's Collegiate School", address: '218 Macquarie St- Hobart TAS 7000', state: 'TAS', regFees:1110, upfrontFee:1110, annualFee:12908, tuitionFee:12907.69 }
,{ id: 114, name: 'The Hutchins School', address: '71 Nelson Rd- Sandy Bay TAS 7005', state: 'TAS', regFees:1610, upfrontFee:1610, annualFee:13400, tuitionFee:13400 }
,{ id: 115, name: "St Mary's College, Hobart", address: '164 Harrington St- Hobart TAS 7000', state: 'TAS', regFees:0, upfrontFee:0, annualFee:3958, tuitionFee:3957.69 }
,{ id: 116, name: 'Launceston Chruch Grammar School', address: '36 Button St- Mowbray TAS 7248', state: 'TAS', regFees:100, upfrontFee:100, annualFee:12900, tuitionFee:12900 }
,{ id: 117, name: 'Launceston Christian School', address: ' 452A W Tamar Hwy- Riverside TAS 7250', state: 'TAS', regFees:1300, upfrontFee:1300, annualFee:4802, tuitionFee:4801.54 }];
    
    var school1,school2,school3,school4,school5,school6;

    school1 = $scope.schoolObjects[0];
    school2 = $scope.schoolObjects[0];
    school3 = $scope.schoolObjects[0];
    school4 = $scope.schoolObjects[0];
    school5 = $scope.schoolObjects[0];
    school6 = $scope.schoolObjects[0];

    $('.sp1').on('change', function() {
        school1 = $('.sp1 option:selected').val();
        // calculateFinal();
    });

    $('.sp2').on('change', function() {
        school2 = $('.sp2 option:selected').val();
        // calculateFinal();
    });

    $('.sp3').on('change', function() {
        school3 = $('.sp3 option:selected').val();
        // calculateFinal();
    });

    $('.sp4').on('change', function() {
        school4 = $('.sp4 option:selected').val();
        // calculateFinal();
    });

    $('.sp5').on('change', function() {
        school5 = $('.sp5 option:selected').val();
        // calculateFinal();
    });

    $('.sp6').on('change', function() {
        school6 = $('.sp6 option:selected').val();
        // calculateFinal();
    });



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
        changeChildrenInputs(Number($scope.numChildren));
        // console.log($scope.numChildren);
        // console.log(typeof $scope.numChildren);
    });

    numChildrenInput.addEventListener("change", function() {
        numChildrenSlider.noUiSlider.set(numChildrenInput.value);
    });

        function changeChildrenInputs(num) {
        for (var i = 1; i <= num; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'block';
            document.getElementsByClassName("h" + i)[0].style.display = 'block';
        }
        for (var i = (num + 1); i <= 6; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'none';
            document.getElementsByClassName("h" + i)[0].style.display = 'none';
        }
    }

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
