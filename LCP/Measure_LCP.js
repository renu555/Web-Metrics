/* To measure LCP in JavaScript, you can use the Largest Contentful Paint API from web-vitals javascript library. 
The following example shows how to create a PerformanceObserver that listens for largest-contentful-paint entries and logs them to the console.*/

new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP candidate:', entry.startTime, entry);
  }
}).observe({type: 'largest-contentful-paint', buffered: true});

/* Use this to avoid the calculations of different parameters */
import {getLCP} from 'web-vitals';

// Measure and log LCP as soon as it's available.
getLCP(console.log);
