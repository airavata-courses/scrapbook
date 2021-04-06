#Steps 

1. Install Jmeter
2. Go to bin folder of jmeter package
3. Store file scrapbook.jmx in bin folder
4. Open Terminal at above location
5. Execute following command to run jmeter in CLI
   sh jmeter.sh -n -t scrapbook.jmx -l scrapbooktest.jtl -e -o scrapbooktestresults
6. Open index.html created under scrapbooktestresults to view dashboard