# Web-Metrics
Performance Metrics for website using the Google Web Vitals 

Source : https://web.dev/vitals/
Web Vitals is an initiative by Google to provide the unified guidance for quality signals that are essential to delivering a great user experience on the Web. 

Core Web Vitals are subset of Web vitals. 2020 the focus is on three aspects of User Experience - loading, interactivity, and visual stability which includes the following metrics 
1.	Loading -> LCP ( Largest Contentful Paint) should be less than 2.5 sec
2.	Interactivity -> FID ( First Input Delay) should be within 100 ms
3.	Visual Stability -> ( Cumulative Layout Shift) should be less than 0.1 
A good threshold is the 75th percentile of page loads , segmented across mobile and desktop devices. 

Tools to measure and report the Core Web vitals. 

a.	Field Tools to measure Core Web vitals
i.	Chrome User Experience Report - > collects anonymized , real user measurement data for each Core Web Vital. No need of any manual tool to be used by the owern. 
ii.	Page Speed Insights power tool
iii.	Search Consoles’s Core Web Vitals report
All of the above gives information about all three metrics discussed. 

b.	Measure Core Web Vitals in Javascript 
i.	Each of Core Web Vitals can be measured in JavaScript using standard web APIs.
ii.	Using the web-vitals Javascript library. 
iii.	Use web-vitals javascript APIs -> send data to analystics endpoint -> analyse the data for meeting the recommendd thresholds for at least 75% of page visits. 
iv.	Some Analytics providers have built-in support for Core Web Vitals metrics for. Eg . Web Vitals Report which allows to measure the metrics using Google Analytics. 
v.	Codes snippets for measuring LCP, FID and CLS in Javascript . 

c.	Without any code use the Web Vitals Chrome Extension. - > Can be used on users side . 

d.	Lab Tools to measure the Core Web Vitals -> instead of FID it give TBT ( total blocking time)
i.	Chrome DevTools 
ii.	LightHouse - > loads the pages in simulated environment , 
iii.	Performance optimizations that improve TBT in the lab should improve FID in the field. 

Recommendations for improving your scores
a.	Optimize LCP
b.	Optimize FID
c.	Optimize CLS

