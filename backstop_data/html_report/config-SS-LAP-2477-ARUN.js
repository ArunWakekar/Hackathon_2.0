report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\LoginPage_Drshti_Homepage_0_dropdown-menu__dropdown-item_0_phone.png",
        "test": "..\\bitmaps_test\\20230818-155057\\LoginPage_Drshti_Homepage_0_dropdown-menu__dropdown-item_0_phone.png",
        "selector": ".dropdown-menu__.dropdown-item",
        "fileName": "LoginPage_Drshti_Homepage_0_dropdown-menu__dropdown-item_0_phone.png",
        "label": "Drshti Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://drishti-dev.tatamotors.com/login",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "engineErrorMsg": "Cannot read properties of undefined (reading 'startsWith')",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -1129,
            "height": -473
          },
          "rawMisMatchPercentage": 4.6879096421534925,
          "misMatchPercentage": "4.69",
          "analysisTime": 67
        },
        "diffImage": "..\\bitmaps_test\\20230818-155057\\failed_diff_LoginPage_Drshti_Homepage_0_dropdown-menu__dropdown-item_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\LoginPage_Drshti_Homepage_0_dropdown-menu__dropdown-item_1_tablet.png",
        "test": "..\\bitmaps_test\\20230818-155057\\LoginPage_Drshti_Homepage_0_dropdown-menu__dropdown-item_1_tablet.png",
        "selector": ".dropdown-menu__.dropdown-item",
        "fileName": "LoginPage_Drshti_Homepage_0_dropdown-menu__dropdown-item_1_tablet.png",
        "label": "Drshti Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://drishti-dev.tatamotors.com/login",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "engineErrorMsg": "Cannot read properties of undefined (reading 'startsWith')",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -1129,
            "height": -473
          },
          "rawMisMatchPercentage": 4.6879096421534925,
          "misMatchPercentage": "4.69",
          "analysisTime": 80
        },
        "diffImage": "..\\bitmaps_test\\20230818-155057\\failed_diff_LoginPage_Drshti_Homepage_0_dropdown-menu__dropdown-item_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "LoginPage"
});