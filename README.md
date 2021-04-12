#Steps

1. Install Jmeter
2. Go to bin folder of jmeter package
3. Store file <jmx file> in bin folder
4. Open Terminal at above location
5. Execute following command to run jmeter in CLI
   sh jmeter.sh -n -t s<jmx file> -l <fileName>.jtl -e -o <folderName>
6. Open index.html created under <folderName> to view dashboard


## Landing Page

1. Copy landingpage/LandingPage.jmx under apache-jmeter/bin
2. go to bin
3. Execute this command ./jmeter.sh -n -t LandingPage.jmx -l LandingPageTest.jtl -e -o LandingPageTestResult
4. A file LandingPageTest.jtl and a folder LandingPageTestResult will be generated 
5. Open index.html to views results and various graph
6. Refer to assets for different graphs