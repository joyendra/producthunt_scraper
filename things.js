var scroller = 0;
var id = setInterval(()=>{
    var currHeight = 0;
    if(scroller === 5){                                         //Set the scroller value for more number of scrolls
        clearInterval(id)
        const eles = document.querySelectorAll("a[class^='link_']")
        let links = []
        Array.from(eles).forEach(ele => {
            links.push(ele.href)
        })
        const csvAsSingleRow = links.join(',')                  //For each entry as a new column
        const csvAsSingleColumn = links.join('\n')     //For Each entry as a new row
        console.log(csvAsSingleRow)
        var hiddenDowloader = document.createElement('a');
        hiddenDowloader.href = 'data:attachment/csv,' +  encodeURIComponent(csvAsSingleRow);  //Name here accordingly
        hiddenDowloader.target = '_blank';
        hiddenDowloader.download = 'Vzzz.csv';

        document.body.appendChild(hiddenDowloader);
        hiddenDowloader.click();
        
    } else{
        scroller++;
        window.scrollTo(currHeight, document.body.scrollHeight);
        currHeight = document.body.scrollHeight;
    }
},1000)                                                         //Slow down scroll for better loading time
