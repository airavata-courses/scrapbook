/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 15.0, "minX": 0.0, "maxY": 6847.0, "series": [{"data": [[0.0, 15.0], [0.1, 16.0], [0.2, 16.0], [0.3, 17.0], [0.4, 18.0], [0.5, 19.0], [0.6, 20.0], [0.7, 20.0], [0.8, 21.0], [0.9, 21.0], [1.0, 22.0], [1.1, 22.0], [1.2, 23.0], [1.3, 24.0], [1.4, 25.0], [1.5, 25.0], [1.6, 26.0], [1.7, 28.0], [1.8, 28.0], [1.9, 29.0], [2.0, 30.0], [2.1, 30.0], [2.2, 31.0], [2.3, 31.0], [2.4, 32.0], [2.5, 33.0], [2.6, 33.0], [2.7, 33.0], [2.8, 34.0], [2.9, 35.0], [3.0, 36.0], [3.1, 37.0], [3.2, 37.0], [3.3, 38.0], [3.4, 38.0], [3.5, 39.0], [3.6, 40.0], [3.7, 41.0], [3.8, 42.0], [3.9, 42.0], [4.0, 43.0], [4.1, 44.0], [4.2, 45.0], [4.3, 45.0], [4.4, 46.0], [4.5, 46.0], [4.6, 47.0], [4.7, 47.0], [4.8, 48.0], [4.9, 49.0], [5.0, 49.0], [5.1, 50.0], [5.2, 51.0], [5.3, 51.0], [5.4, 52.0], [5.5, 53.0], [5.6, 53.0], [5.7, 54.0], [5.8, 55.0], [5.9, 56.0], [6.0, 56.0], [6.1, 57.0], [6.2, 57.0], [6.3, 58.0], [6.4, 59.0], [6.5, 60.0], [6.6, 60.0], [6.7, 61.0], [6.8, 62.0], [6.9, 63.0], [7.0, 64.0], [7.1, 66.0], [7.2, 66.0], [7.3, 67.0], [7.4, 67.0], [7.5, 68.0], [7.6, 69.0], [7.7, 69.0], [7.8, 70.0], [7.9, 70.0], [8.0, 72.0], [8.1, 73.0], [8.2, 73.0], [8.3, 75.0], [8.4, 75.0], [8.5, 78.0], [8.6, 78.0], [8.7, 80.0], [8.8, 80.0], [8.9, 81.0], [9.0, 82.0], [9.1, 83.0], [9.2, 85.0], [9.3, 87.0], [9.4, 88.0], [9.5, 89.0], [9.6, 90.0], [9.7, 92.0], [9.8, 93.0], [9.9, 94.0], [10.0, 96.0], [10.1, 97.0], [10.2, 98.0], [10.3, 101.0], [10.4, 103.0], [10.5, 105.0], [10.6, 105.0], [10.7, 106.0], [10.8, 107.0], [10.9, 109.0], [11.0, 110.0], [11.1, 111.0], [11.2, 112.0], [11.3, 114.0], [11.4, 115.0], [11.5, 115.0], [11.6, 117.0], [11.7, 118.0], [11.8, 119.0], [11.9, 120.0], [12.0, 122.0], [12.1, 123.0], [12.2, 124.0], [12.3, 125.0], [12.4, 126.0], [12.5, 127.0], [12.6, 128.0], [12.7, 129.0], [12.8, 130.0], [12.9, 130.0], [13.0, 131.0], [13.1, 132.0], [13.2, 132.0], [13.3, 133.0], [13.4, 133.0], [13.5, 134.0], [13.6, 135.0], [13.7, 136.0], [13.8, 137.0], [13.9, 138.0], [14.0, 139.0], [14.1, 140.0], [14.2, 142.0], [14.3, 143.0], [14.4, 145.0], [14.5, 146.0], [14.6, 148.0], [14.7, 148.0], [14.8, 149.0], [14.9, 150.0], [15.0, 151.0], [15.1, 152.0], [15.2, 153.0], [15.3, 154.0], [15.4, 155.0], [15.5, 155.0], [15.6, 156.0], [15.7, 157.0], [15.8, 157.0], [15.9, 158.0], [16.0, 159.0], [16.1, 160.0], [16.2, 160.0], [16.3, 160.0], [16.4, 161.0], [16.5, 161.0], [16.6, 162.0], [16.7, 163.0], [16.8, 163.0], [16.9, 163.0], [17.0, 164.0], [17.1, 164.0], [17.2, 164.0], [17.3, 165.0], [17.4, 165.0], [17.5, 166.0], [17.6, 167.0], [17.7, 167.0], [17.8, 168.0], [17.9, 168.0], [18.0, 169.0], [18.1, 170.0], [18.2, 170.0], [18.3, 170.0], [18.4, 171.0], [18.5, 171.0], [18.6, 172.0], [18.7, 172.0], [18.8, 173.0], [18.9, 173.0], [19.0, 174.0], [19.1, 175.0], [19.2, 175.0], [19.3, 176.0], [19.4, 177.0], [19.5, 178.0], [19.6, 178.0], [19.7, 179.0], [19.8, 180.0], [19.9, 180.0], [20.0, 181.0], [20.1, 181.0], [20.2, 181.0], [20.3, 182.0], [20.4, 182.0], [20.5, 183.0], [20.6, 183.0], [20.7, 184.0], [20.8, 184.0], [20.9, 185.0], [21.0, 186.0], [21.1, 186.0], [21.2, 187.0], [21.3, 187.0], [21.4, 188.0], [21.5, 188.0], [21.6, 189.0], [21.7, 189.0], [21.8, 190.0], [21.9, 192.0], [22.0, 192.0], [22.1, 193.0], [22.2, 194.0], [22.3, 195.0], [22.4, 196.0], [22.5, 197.0], [22.6, 197.0], [22.7, 198.0], [22.8, 199.0], [22.9, 200.0], [23.0, 201.0], [23.1, 202.0], [23.2, 202.0], [23.3, 203.0], [23.4, 204.0], [23.5, 204.0], [23.6, 205.0], [23.7, 206.0], [23.8, 206.0], [23.9, 207.0], [24.0, 208.0], [24.1, 209.0], [24.2, 209.0], [24.3, 210.0], [24.4, 210.0], [24.5, 212.0], [24.6, 213.0], [24.7, 214.0], [24.8, 214.0], [24.9, 215.0], [25.0, 216.0], [25.1, 216.0], [25.2, 217.0], [25.3, 218.0], [25.4, 219.0], [25.5, 219.0], [25.6, 220.0], [25.7, 220.0], [25.8, 221.0], [25.9, 221.0], [26.0, 222.0], [26.1, 222.0], [26.2, 223.0], [26.3, 224.0], [26.4, 225.0], [26.5, 226.0], [26.6, 226.0], [26.7, 228.0], [26.8, 228.0], [26.9, 230.0], [27.0, 230.0], [27.1, 231.0], [27.2, 231.0], [27.3, 232.0], [27.4, 233.0], [27.5, 233.0], [27.6, 235.0], [27.7, 235.0], [27.8, 236.0], [27.9, 237.0], [28.0, 237.0], [28.1, 238.0], [28.2, 240.0], [28.3, 240.0], [28.4, 241.0], [28.5, 242.0], [28.6, 243.0], [28.7, 243.0], [28.8, 244.0], [28.9, 245.0], [29.0, 246.0], [29.1, 247.0], [29.2, 248.0], [29.3, 248.0], [29.4, 249.0], [29.5, 251.0], [29.6, 253.0], [29.7, 254.0], [29.8, 255.0], [29.9, 256.0], [30.0, 258.0], [30.1, 258.0], [30.2, 259.0], [30.3, 260.0], [30.4, 261.0], [30.5, 263.0], [30.6, 263.0], [30.7, 264.0], [30.8, 265.0], [30.9, 266.0], [31.0, 266.0], [31.1, 267.0], [31.2, 268.0], [31.3, 268.0], [31.4, 269.0], [31.5, 270.0], [31.6, 271.0], [31.7, 272.0], [31.8, 273.0], [31.9, 274.0], [32.0, 275.0], [32.1, 277.0], [32.2, 278.0], [32.3, 279.0], [32.4, 281.0], [32.5, 282.0], [32.6, 283.0], [32.7, 285.0], [32.8, 287.0], [32.9, 288.0], [33.0, 290.0], [33.1, 291.0], [33.2, 292.0], [33.3, 293.0], [33.4, 294.0], [33.5, 295.0], [33.6, 296.0], [33.7, 296.0], [33.8, 297.0], [33.9, 298.0], [34.0, 300.0], [34.1, 302.0], [34.2, 303.0], [34.3, 304.0], [34.4, 305.0], [34.5, 306.0], [34.6, 308.0], [34.7, 309.0], [34.8, 310.0], [34.9, 312.0], [35.0, 313.0], [35.1, 315.0], [35.2, 316.0], [35.3, 317.0], [35.4, 319.0], [35.5, 320.0], [35.6, 321.0], [35.7, 323.0], [35.8, 325.0], [35.9, 327.0], [36.0, 328.0], [36.1, 329.0], [36.2, 331.0], [36.3, 332.0], [36.4, 333.0], [36.5, 335.0], [36.6, 337.0], [36.7, 338.0], [36.8, 338.0], [36.9, 340.0], [37.0, 341.0], [37.1, 343.0], [37.2, 344.0], [37.3, 345.0], [37.4, 346.0], [37.5, 347.0], [37.6, 348.0], [37.7, 348.0], [37.8, 350.0], [37.9, 351.0], [38.0, 352.0], [38.1, 354.0], [38.2, 355.0], [38.3, 356.0], [38.4, 357.0], [38.5, 358.0], [38.6, 359.0], [38.7, 359.0], [38.8, 360.0], [38.9, 362.0], [39.0, 363.0], [39.1, 364.0], [39.2, 365.0], [39.3, 366.0], [39.4, 367.0], [39.5, 368.0], [39.6, 370.0], [39.7, 371.0], [39.8, 372.0], [39.9, 373.0], [40.0, 374.0], [40.1, 374.0], [40.2, 375.0], [40.3, 376.0], [40.4, 377.0], [40.5, 378.0], [40.6, 379.0], [40.7, 380.0], [40.8, 381.0], [40.9, 382.0], [41.0, 383.0], [41.1, 384.0], [41.2, 385.0], [41.3, 386.0], [41.4, 387.0], [41.5, 388.0], [41.6, 389.0], [41.7, 390.0], [41.8, 391.0], [41.9, 392.0], [42.0, 393.0], [42.1, 394.0], [42.2, 396.0], [42.3, 397.0], [42.4, 398.0], [42.5, 399.0], [42.6, 401.0], [42.7, 402.0], [42.8, 403.0], [42.9, 404.0], [43.0, 405.0], [43.1, 406.0], [43.2, 407.0], [43.3, 409.0], [43.4, 411.0], [43.5, 413.0], [43.6, 416.0], [43.7, 418.0], [43.8, 419.0], [43.9, 421.0], [44.0, 422.0], [44.1, 425.0], [44.2, 426.0], [44.3, 431.0], [44.4, 433.0], [44.5, 435.0], [44.6, 438.0], [44.7, 439.0], [44.8, 441.0], [44.9, 443.0], [45.0, 446.0], [45.1, 450.0], [45.2, 454.0], [45.3, 456.0], [45.4, 459.0], [45.5, 462.0], [45.6, 465.0], [45.7, 469.0], [45.8, 473.0], [45.9, 474.0], [46.0, 477.0], [46.1, 480.0], [46.2, 483.0], [46.3, 486.0], [46.4, 490.0], [46.5, 495.0], [46.6, 500.0], [46.7, 509.0], [46.8, 514.0], [46.9, 518.0], [47.0, 523.0], [47.1, 526.0], [47.2, 529.0], [47.3, 532.0], [47.4, 535.0], [47.5, 538.0], [47.6, 542.0], [47.7, 545.0], [47.8, 548.0], [47.9, 552.0], [48.0, 555.0], [48.1, 558.0], [48.2, 560.0], [48.3, 562.0], [48.4, 565.0], [48.5, 569.0], [48.6, 574.0], [48.7, 579.0], [48.8, 581.0], [48.9, 584.0], [49.0, 586.0], [49.1, 589.0], [49.2, 591.0], [49.3, 593.0], [49.4, 595.0], [49.5, 597.0], [49.6, 601.0], [49.7, 604.0], [49.8, 606.0], [49.9, 609.0], [50.0, 612.0], [50.1, 614.0], [50.2, 617.0], [50.3, 620.0], [50.4, 624.0], [50.5, 627.0], [50.6, 632.0], [50.7, 636.0], [50.8, 640.0], [50.9, 645.0], [51.0, 651.0], [51.1, 656.0], [51.2, 665.0], [51.3, 670.0], [51.4, 673.0], [51.5, 678.0], [51.6, 681.0], [51.7, 683.0], [51.8, 686.0], [51.9, 689.0], [52.0, 691.0], [52.1, 694.0], [52.2, 698.0], [52.3, 701.0], [52.4, 705.0], [52.5, 707.0], [52.6, 710.0], [52.7, 712.0], [52.8, 718.0], [52.9, 722.0], [53.0, 726.0], [53.1, 727.0], [53.2, 730.0], [53.3, 734.0], [53.4, 737.0], [53.5, 741.0], [53.6, 743.0], [53.7, 747.0], [53.8, 752.0], [53.9, 755.0], [54.0, 756.0], [54.1, 758.0], [54.2, 760.0], [54.3, 764.0], [54.4, 766.0], [54.5, 768.0], [54.6, 769.0], [54.7, 770.0], [54.8, 772.0], [54.9, 772.0], [55.0, 773.0], [55.1, 774.0], [55.2, 774.0], [55.3, 775.0], [55.4, 776.0], [55.5, 778.0], [55.6, 780.0], [55.7, 781.0], [55.8, 782.0], [55.9, 783.0], [56.0, 784.0], [56.1, 786.0], [56.2, 787.0], [56.3, 788.0], [56.4, 788.0], [56.5, 789.0], [56.6, 790.0], [56.7, 791.0], [56.8, 791.0], [56.9, 792.0], [57.0, 793.0], [57.1, 795.0], [57.2, 797.0], [57.3, 799.0], [57.4, 800.0], [57.5, 802.0], [57.6, 804.0], [57.7, 805.0], [57.8, 806.0], [57.9, 807.0], [58.0, 807.0], [58.1, 808.0], [58.2, 809.0], [58.3, 810.0], [58.4, 811.0], [58.5, 813.0], [58.6, 814.0], [58.7, 815.0], [58.8, 816.0], [58.9, 818.0], [59.0, 819.0], [59.1, 820.0], [59.2, 821.0], [59.3, 823.0], [59.4, 823.0], [59.5, 825.0], [59.6, 827.0], [59.7, 828.0], [59.8, 830.0], [59.9, 830.0], [60.0, 833.0], [60.1, 834.0], [60.2, 835.0], [60.3, 836.0], [60.4, 838.0], [60.5, 840.0], [60.6, 841.0], [60.7, 843.0], [60.8, 846.0], [60.9, 848.0], [61.0, 850.0], [61.1, 851.0], [61.2, 853.0], [61.3, 854.0], [61.4, 857.0], [61.5, 858.0], [61.6, 860.0], [61.7, 861.0], [61.8, 863.0], [61.9, 865.0], [62.0, 867.0], [62.1, 869.0], [62.2, 871.0], [62.3, 873.0], [62.4, 875.0], [62.5, 877.0], [62.6, 882.0], [62.7, 885.0], [62.8, 888.0], [62.9, 890.0], [63.0, 893.0], [63.1, 898.0], [63.2, 902.0], [63.3, 907.0], [63.4, 912.0], [63.5, 914.0], [63.6, 917.0], [63.7, 920.0], [63.8, 923.0], [63.9, 925.0], [64.0, 928.0], [64.1, 933.0], [64.2, 937.0], [64.3, 945.0], [64.4, 950.0], [64.5, 956.0], [64.6, 961.0], [64.7, 965.0], [64.8, 967.0], [64.9, 971.0], [65.0, 976.0], [65.1, 980.0], [65.2, 984.0], [65.3, 986.0], [65.4, 988.0], [65.5, 991.0], [65.6, 994.0], [65.7, 996.0], [65.8, 997.0], [65.9, 999.0], [66.0, 1000.0], [66.1, 1002.0], [66.2, 1003.0], [66.3, 1005.0], [66.4, 1005.0], [66.5, 1007.0], [66.6, 1008.0], [66.7, 1009.0], [66.8, 1012.0], [66.9, 1014.0], [67.0, 1016.0], [67.1, 1019.0], [67.2, 1021.0], [67.3, 1022.0], [67.4, 1023.0], [67.5, 1024.0], [67.6, 1026.0], [67.7, 1029.0], [67.8, 1030.0], [67.9, 1032.0], [68.0, 1033.0], [68.1, 1036.0], [68.2, 1039.0], [68.3, 1042.0], [68.4, 1046.0], [68.5, 1050.0], [68.6, 1053.0], [68.7, 1055.0], [68.8, 1059.0], [68.9, 1064.0], [69.0, 1068.0], [69.1, 1072.0], [69.2, 1076.0], [69.3, 1079.0], [69.4, 1083.0], [69.5, 1087.0], [69.6, 1092.0], [69.7, 1098.0], [69.8, 1101.0], [69.9, 1104.0], [70.0, 1108.0], [70.1, 1112.0], [70.2, 1114.0], [70.3, 1119.0], [70.4, 1122.0], [70.5, 1124.0], [70.6, 1126.0], [70.7, 1127.0], [70.8, 1130.0], [70.9, 1131.0], [71.0, 1133.0], [71.1, 1135.0], [71.2, 1137.0], [71.3, 1138.0], [71.4, 1139.0], [71.5, 1141.0], [71.6, 1143.0], [71.7, 1144.0], [71.8, 1148.0], [71.9, 1151.0], [72.0, 1153.0], [72.1, 1155.0], [72.2, 1157.0], [72.3, 1158.0], [72.4, 1160.0], [72.5, 1162.0], [72.6, 1165.0], [72.7, 1166.0], [72.8, 1168.0], [72.9, 1170.0], [73.0, 1171.0], [73.1, 1173.0], [73.2, 1174.0], [73.3, 1176.0], [73.4, 1177.0], [73.5, 1178.0], [73.6, 1179.0], [73.7, 1180.0], [73.8, 1181.0], [73.9, 1182.0], [74.0, 1183.0], [74.1, 1184.0], [74.2, 1185.0], [74.3, 1186.0], [74.4, 1188.0], [74.5, 1189.0], [74.6, 1190.0], [74.7, 1191.0], [74.8, 1194.0], [74.9, 1196.0], [75.0, 1198.0], [75.1, 1202.0], [75.2, 1204.0], [75.3, 1207.0], [75.4, 1212.0], [75.5, 1222.0], [75.6, 1231.0], [75.7, 1236.0], [75.8, 1241.0], [75.9, 1249.0], [76.0, 1261.0], [76.1, 1272.0], [76.2, 1286.0], [76.3, 1293.0], [76.4, 1299.0], [76.5, 1306.0], [76.6, 1313.0], [76.7, 1322.0], [76.8, 1326.0], [76.9, 1332.0], [77.0, 1338.0], [77.1, 1347.0], [77.2, 1350.0], [77.3, 1353.0], [77.4, 1357.0], [77.5, 1361.0], [77.6, 1365.0], [77.7, 1375.0], [77.8, 1383.0], [77.9, 1389.0], [78.0, 1393.0], [78.1, 1397.0], [78.2, 1402.0], [78.3, 1410.0], [78.4, 1416.0], [78.5, 1423.0], [78.6, 1435.0], [78.7, 1444.0], [78.8, 1452.0], [78.9, 1462.0], [79.0, 1470.0], [79.1, 1482.0], [79.2, 1493.0], [79.3, 1503.0], [79.4, 1514.0], [79.5, 1530.0], [79.6, 1539.0], [79.7, 1551.0], [79.8, 1560.0], [79.9, 1571.0], [80.0, 1579.0], [80.1, 1584.0], [80.2, 1591.0], [80.3, 1597.0], [80.4, 1606.0], [80.5, 1616.0], [80.6, 1629.0], [80.7, 1645.0], [80.8, 1653.0], [80.9, 1658.0], [81.0, 1661.0], [81.1, 1668.0], [81.2, 1672.0], [81.3, 1676.0], [81.4, 1679.0], [81.5, 1683.0], [81.6, 1689.0], [81.7, 1696.0], [81.8, 1706.0], [81.9, 1715.0], [82.0, 1722.0], [82.1, 1729.0], [82.2, 1746.0], [82.3, 1759.0], [82.4, 1773.0], [82.5, 1783.0], [82.6, 1792.0], [82.7, 1798.0], [82.8, 1803.0], [82.9, 1808.0], [83.0, 1816.0], [83.1, 1822.0], [83.2, 1833.0], [83.3, 1840.0], [83.4, 1849.0], [83.5, 1853.0], [83.6, 1862.0], [83.7, 1869.0], [83.8, 1874.0], [83.9, 1879.0], [84.0, 1884.0], [84.1, 1889.0], [84.2, 1893.0], [84.3, 1897.0], [84.4, 1903.0], [84.5, 1911.0], [84.6, 1920.0], [84.7, 1926.0], [84.8, 1928.0], [84.9, 1943.0], [85.0, 1948.0], [85.1, 1955.0], [85.2, 1964.0], [85.3, 1968.0], [85.4, 1973.0], [85.5, 1982.0], [85.6, 1993.0], [85.7, 2001.0], [85.8, 2014.0], [85.9, 2023.0], [86.0, 2030.0], [86.1, 2035.0], [86.2, 2041.0], [86.3, 2045.0], [86.4, 2055.0], [86.5, 2067.0], [86.6, 2074.0], [86.7, 2078.0], [86.8, 2083.0], [86.9, 2090.0], [87.0, 2098.0], [87.1, 2104.0], [87.2, 2109.0], [87.3, 2115.0], [87.4, 2122.0], [87.5, 2125.0], [87.6, 2133.0], [87.7, 2140.0], [87.8, 2144.0], [87.9, 2154.0], [88.0, 2157.0], [88.1, 2161.0], [88.2, 2167.0], [88.3, 2175.0], [88.4, 2190.0], [88.5, 2202.0], [88.6, 2209.0], [88.7, 2213.0], [88.8, 2222.0], [88.9, 2226.0], [89.0, 2232.0], [89.1, 2237.0], [89.2, 2244.0], [89.3, 2247.0], [89.4, 2251.0], [89.5, 2253.0], [89.6, 2255.0], [89.7, 2257.0], [89.8, 2261.0], [89.9, 2263.0], [90.0, 2267.0], [90.1, 2269.0], [90.2, 2271.0], [90.3, 2273.0], [90.4, 2275.0], [90.5, 2278.0], [90.6, 2282.0], [90.7, 2286.0], [90.8, 2289.0], [90.9, 2293.0], [91.0, 2297.0], [91.1, 2301.0], [91.2, 2311.0], [91.3, 2315.0], [91.4, 2320.0], [91.5, 2326.0], [91.6, 2334.0], [91.7, 2343.0], [91.8, 2350.0], [91.9, 2357.0], [92.0, 2369.0], [92.1, 2385.0], [92.2, 2410.0], [92.3, 2442.0], [92.4, 2484.0], [92.5, 2509.0], [92.6, 2514.0], [92.7, 2537.0], [92.8, 2546.0], [92.9, 2552.0], [93.0, 2563.0], [93.1, 2573.0], [93.2, 2607.0], [93.3, 2630.0], [93.4, 2664.0], [93.5, 2687.0], [93.6, 2711.0], [93.7, 2731.0], [93.8, 2752.0], [93.9, 2773.0], [94.0, 2801.0], [94.1, 2816.0], [94.2, 2828.0], [94.3, 2848.0], [94.4, 2861.0], [94.5, 2889.0], [94.6, 2917.0], [94.7, 2939.0], [94.8, 2956.0], [94.9, 2973.0], [95.0, 2995.0], [95.1, 3010.0], [95.2, 3028.0], [95.3, 3047.0], [95.4, 3057.0], [95.5, 3069.0], [95.6, 3083.0], [95.7, 3091.0], [95.8, 3115.0], [95.9, 3138.0], [96.0, 3212.0], [96.1, 3241.0], [96.2, 3260.0], [96.3, 3279.0], [96.4, 3299.0], [96.5, 3317.0], [96.6, 3342.0], [96.7, 3359.0], [96.8, 3386.0], [96.9, 3415.0], [97.0, 3432.0], [97.1, 3446.0], [97.2, 3461.0], [97.3, 3469.0], [97.4, 3488.0], [97.5, 3511.0], [97.6, 3534.0], [97.7, 3573.0], [97.8, 3592.0], [97.9, 3608.0], [98.0, 3626.0], [98.1, 3645.0], [98.2, 3657.0], [98.3, 3682.0], [98.4, 3690.0], [98.5, 3699.0], [98.6, 3717.0], [98.7, 3747.0], [98.8, 3783.0], [98.9, 3806.0], [99.0, 3919.0], [99.1, 4783.0], [99.2, 4881.0], [99.3, 4903.0], [99.4, 4934.0], [99.5, 4952.0], [99.6, 4970.0], [99.7, 4991.0], [99.8, 5016.0], [99.9, 5095.0], [100.0, 6847.0]], "isOverall": false, "label": "HTTP GET Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1263.0, "series": [{"data": [[0.0, 1022.0], [600.0, 269.0], [700.0, 514.0], [800.0, 578.0], [900.0, 280.0], [1000.0, 374.0], [1100.0, 533.0], [1200.0, 137.0], [1300.0, 174.0], [1400.0, 109.0], [1500.0, 109.0], [1600.0, 140.0], [1700.0, 98.0], [1800.0, 163.0], [1900.0, 135.0], [2000.0, 134.0], [2100.0, 144.0], [2200.0, 260.0], [2300.0, 109.0], [2400.0, 27.0], [2500.0, 75.0], [2600.0, 38.0], [2800.0, 56.0], [2700.0, 44.0], [2900.0, 48.0], [3000.0, 72.0], [3100.0, 21.0], [3200.0, 45.0], [3300.0, 43.0], [3400.0, 60.0], [3500.0, 39.0], [3600.0, 68.0], [3700.0, 37.0], [3800.0, 11.0], [3900.0, 3.0], [4000.0, 2.0], [4100.0, 1.0], [4200.0, 2.0], [4600.0, 2.0], [4800.0, 18.0], [4700.0, 1.0], [4900.0, 44.0], [5000.0, 18.0], [5100.0, 5.0], [5400.0, 1.0], [6700.0, 3.0], [6800.0, 1.0], [100.0, 1263.0], [200.0, 1113.0], [300.0, 852.0], [400.0, 408.0], [500.0, 297.0]], "isOverall": false, "label": "HTTP GET Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2076.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4660.0, "series": [{"data": [[0.0, 4660.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3264.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2076.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 870.3100999999984, "minX": 1.61824728E12, "maxY": 870.3100999999984, "series": [{"data": [[1.61824728E12, 870.3100999999984]], "isOverall": false, "label": "LandingPage", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61824728E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 20.0, "minX": 1.0, "maxY": 4903.0, "series": [{"data": [[2.0, 39.0], [3.0, 941.0], [4.0, 27.0], [5.0, 32.0], [6.0, 31.0], [7.0, 28.0], [9.0, 44.5], [12.0, 42.0], [13.0, 37.2], [14.0, 39.0], [17.0, 35.666666666666664], [19.0, 22.0], [22.0, 25.333333333333336], [31.0, 296.0], [33.0, 291.3333333333333], [32.0, 295.0], [35.0, 293.0], [36.0, 296.0], [38.0, 292.7142857142857], [48.0, 248.0], [59.0, 167.0], [60.0, 286.0], [67.0, 252.42857142857142], [68.0, 234.12499999999997], [72.0, 241.81818181818178], [154.0, 730.0], [162.0, 719.0], [176.0, 837.3717948717951], [199.0, 1212.0], [217.0, 1300.3333333333333], [225.0, 1202.4285714285716], [228.0, 1134.6666666666667], [227.0, 545.0], [226.0, 1118.25], [231.0, 1154.8333333333333], [236.0, 877.0], [238.0, 730.0], [237.0, 1308.0], [242.0, 1649.0], [247.0, 605.0], [245.0, 592.8], [243.0, 727.0], [254.0, 1091.3000000000004], [255.0, 203.5], [253.0, 593.75], [256.0, 1169.0769230769233], [257.0, 863.6666666666666], [263.0, 605.5], [258.0, 593.0], [287.0, 592.0], [274.0, 1064.0], [277.0, 571.5], [272.0, 565.0], [276.0, 557.8], [278.0, 542.0], [303.0, 735.0909090909092], [301.0, 1807.0], [320.0, 675.0], [324.0, 764.0], [330.0, 480.0], [431.0, 1890.582608695653], [436.0, 1563.8181818181818], [457.0, 2208.0], [484.0, 380.8], [485.0, 197.0], [487.0, 176.93877551020412], [488.0, 141.0], [489.0, 264.25], [492.0, 98.0], [504.0, 148.74411764705886], [509.0, 189.0], [496.0, 130.0], [497.0, 145.77777777777777], [499.0, 127.6086956521739], [512.0, 81.66666666666666], [517.0, 22.0], [523.0, 22.0], [526.0, 20.0], [534.0, 21.0], [542.0, 20.0], [570.0, 1985.0], [550.0, 26.0], [562.0, 197.0], [574.0, 196.0], [582.0, 22.0], [595.0, 21.0], [601.0, 195.0], [638.0, 1901.9090909090908], [636.0, 1924.0], [627.0, 377.34422110552725], [628.0, 1743.7058823529412], [645.0, 2046.0], [648.0, 2099.375], [647.0, 2075.8888888888887], [649.0, 2112.5], [650.0, 2203.0740740740744], [646.0, 2025.142857142857], [652.0, 1227.4444444444446], [659.0, 1506.75], [670.0, 1476.395348837209], [671.0, 1103.642857142857], [687.0, 2009.9565217391305], [683.0, 1623.3333333333333], [679.0, 975.5348837209305], [672.0, 1421.1200000000001], [673.0, 1784.0], [674.0, 1469.4444444444446], [675.0, 1998.375], [676.0, 1178.1714285714284], [677.0, 361.0], [700.0, 1455.4455445544554], [689.0, 1634.8], [690.0, 1988.6666666666667], [691.0, 1798.5], [692.0, 1570.2], [693.0, 1933.4285714285713], [694.0, 1692.913043478261], [680.0, 1460.516129032258], [681.0, 1378.0], [682.0, 1849.7142857142856], [684.0, 2166.0], [685.0, 1690.8], [686.0, 2137.272727272727], [755.0, 778.1090909090908], [746.0, 905.7936507936511], [745.0, 639.0], [744.0, 1317.5625000000005], [743.0, 1885.142857142857], [799.0, 720.9858156028371], [802.0, 1203.5555555555557], [822.0, 464.3333333333333], [817.0, 650.5], [815.0, 840.0], [800.0, 1172.0], [813.0, 988.0], [812.0, 916.3333333333333], [808.0, 925.3333333333335], [804.0, 1351.0], [806.0, 1233.0], [861.0, 1071.25], [856.0, 590.3529411764707], [858.0, 1195.3333333333333], [859.0, 1156.2000000000003], [862.0, 1146.3846153846155], [863.0, 1163.4545454545455], [855.0, 923.5], [853.0, 62.0], [845.0, 1060.0], [843.0, 967.0], [889.0, 4903.0], [866.0, 1928.061538461537], [864.0, 1059.0], [873.0, 1016.0], [877.0, 835.5], [865.0, 1105.5], [867.0, 1061.5084745762708], [868.0, 2258.085714285714], [869.0, 280.0], [870.0, 1022.0], [888.0, 287.0], [895.0, 226.0], [881.0, 206.0], [886.0, 259.5], [891.0, 1920.0869565217395], [892.0, 2462.0], [893.0, 581.0714285714287], [894.0, 234.75], [926.0, 964.0], [916.0, 616.0], [919.0, 1794.2307692307686], [921.0, 1956.9465648854962], [911.0, 235.0], [899.0, 212.0], [909.0, 200.0], [908.0, 233.0], [907.0, 217.0], [906.0, 216.0], [905.0, 242.0], [904.0, 246.0], [920.0, 1990.423076923077], [918.0, 620.0], [927.0, 79.5], [915.0, 196.0], [925.0, 76.57142857142857], [924.0, 79.11111111111111], [923.0, 92.0], [922.0, 71.0], [952.0, 1566.4545454545455], [932.0, 2472.5], [930.0, 75.25], [929.0, 72.30434782608693], [928.0, 474.22222222222223], [943.0, 1636.0], [942.0, 1452.4444444444443], [941.0, 2245.0], [939.0, 1751.4615384615386], [938.0, 1902.5714285714287], [937.0, 1852.125], [936.0, 2004.2222222222222], [933.0, 2075.37037037037], [934.0, 1993.08396946565], [935.0, 849.5454545454544], [951.0, 536.5], [950.0, 1057.8], [946.0, 1742.5], [945.0, 2215.5], [944.0, 1757.0], [989.0, 619.5185185185185], [980.0, 1109.1351351351352], [988.0, 517.8169014084509], [990.0, 524.4444444444447], [991.0, 571.6923076923076], [976.0, 1811.2631578947369], [987.0, 363.89610389610374], [986.0, 1186.245033112583], [985.0, 743.7241379310345], [984.0, 775.1111111111112], [967.0, 1334.0], [965.0, 3006.0], [963.0, 2490.0], [966.0, 2792.5], [962.0, 1564.7222222222224], [975.0, 1232.8030303030305], [960.0, 1794.5581947743458], [961.0, 1725.6036585365855], [974.0, 1710.3333333333333], [973.0, 1195.0714285714284], [971.0, 890.2142857142856], [969.0, 792.0], [968.0, 771.0], [972.0, 772.6666666666667], [983.0, 815.75], [982.0, 837.044117647059], [981.0, 649.95], [979.0, 1485.331288343558], [978.0, 1448.6888888888886], [977.0, 1439.380952380952], [992.0, 499.0454545454545], [993.0, 525.9318181818182], [995.0, 201.50253807106606], [996.0, 1327.0], [997.0, 1249.4782608695652], [998.0, 1389.6571428571426], [1000.0, 506.7815941269014], [994.0, 407.0], [1.0, 33.0]], "isOverall": false, "label": "HTTP GET Request", "isController": false}, {"data": [[870.2334000000018, 924.8217000000021]], "isOverall": false, "label": "HTTP GET Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1000.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 25666.666666666668, "minX": 1.61824728E12, "maxY": 1241833.3333333333, "series": [{"data": [[1.61824728E12, 1241833.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61824728E12, 25666.666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61824728E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 924.8217000000021, "minX": 1.61824728E12, "maxY": 924.8217000000021, "series": [{"data": [[1.61824728E12, 924.8217000000021]], "isOverall": false, "label": "HTTP GET Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61824728E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 838.8343000000018, "minX": 1.61824728E12, "maxY": 838.8343000000018, "series": [{"data": [[1.61824728E12, 838.8343000000018]], "isOverall": false, "label": "HTTP GET Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61824728E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 75.23190000000037, "minX": 1.61824728E12, "maxY": 75.23190000000037, "series": [{"data": [[1.61824728E12, 75.23190000000037]], "isOverall": false, "label": "HTTP GET Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61824728E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 15.0, "minX": 1.61824728E12, "maxY": 6847.0, "series": [{"data": [[1.61824728E12, 6847.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61824728E12, 2267.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61824728E12, 3971.4699999999884]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61824728E12, 2996.899999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61824728E12, 15.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61824728E12, 612.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61824728E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 36.0, "minX": 19.0, "maxY": 2816.0, "series": [{"data": [[128.0, 2121.0], [141.0, 2816.0], [572.0, 263.5], [155.0, 978.0], [611.0, 1305.0], [688.0, 1253.0], [58.0, 1955.5], [235.0, 888.0], [1029.0, 268.0], [70.0, 2199.0], [19.0, 711.0], [1238.0, 347.0], [1230.0, 388.5], [82.0, 979.5], [1334.0, 516.5], [336.0, 253.5], [374.0, 2255.0], [370.0, 197.0], [427.0, 820.0], [422.0, 787.0], [28.0, 36.0], [453.0, 948.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1334.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 33.0, "minX": 19.0, "maxY": 2557.0, "series": [{"data": [[128.0, 2081.5], [141.0, 2557.0], [572.0, 257.0], [155.0, 932.0], [611.0, 1178.0], [688.0, 1173.5], [58.0, 1845.5], [235.0, 864.0], [1029.0, 263.0], [70.0, 1932.5], [19.0, 710.0], [1238.0, 318.5], [1230.0, 220.0], [82.0, 959.0], [1334.0, 460.5], [336.0, 242.0], [374.0, 1966.5], [370.0, 178.0], [427.0, 704.0], [422.0, 745.5], [28.0, 33.0], [453.0, 683.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1334.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.61824728E12, "maxY": 166.66666666666666, "series": [{"data": [[1.61824728E12, 166.66666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61824728E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.61824728E12, "maxY": 166.66666666666666, "series": [{"data": [[1.61824728E12, 166.66666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61824728E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.61824728E12, "maxY": 166.66666666666666, "series": [{"data": [[1.61824728E12, 166.66666666666666]], "isOverall": false, "label": "HTTP GET Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61824728E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.61824728E12, "maxY": 166.66666666666666, "series": [{"data": [[1.61824728E12, 166.66666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61824728E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

