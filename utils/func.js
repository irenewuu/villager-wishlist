

export function filtering(
    arr=[],
    config={name:null, personality:[], hobby:[], gender:[]}
    ) {

        const {name, personality, hobby, gender} = config;
        
        if(name || personality || hobby || gender) {

            const filtered_arr = arr.filter((o)=> {
                var cond = true;
                    if(name) {
                        cond = cond && o.name.includes(name);
                    }
                    if(personality) {
                        cond = cond && personality.includes(o.personality);
                    }
                    if(hobby) {
                        cond = cond && hobby.includes(o.nh_details.hobby);
                    }
                    if(gender) {
                        cond = cond && gender.includes(o.gender);
                    }
                return cond;

            }) 
            
            return filtered_arr;
        } else {
            return [];
        }
}

// const acnh = require('./ac-villagers.json')

// const acnhList = acnh.map((o, _id) => Object.assign(o, { _id }))


// var villagers = filtering(acnhList, {
//     personality: "Cranky"
// })

// console.log(villagers.slice(0,2))

export function GoToPage(p=1, arr=[], num=10) {
    
    const lists = arr.slice((p-1)*num, p*num);
    // console.log(lists);
    // p will be 1 so we do -1 to get books 0-5
    return lists;

}
// cd into utils folder and type "node func, it will show the functions results"

//GoToPage(1) will get me books 0-5
//GoToPage(2) will get me books 5-10
// GoToPage(2);




  // const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {
  //   const [pages] = useState(Math.round(data.length / dataLimit));
  //   const [currentPage, setCurrentPage] = useState(1);
  
  //   function goToNextPage() {
  //       setCurrentPage((page) => page + 1);
  //   }
  
  //   function goToPreviousPage() {
  //       setCurrentPage((page) => page - 1);
  //   }
  
  //   function changePage(event) {
  //       const pageNumber = Number(event.target.textContent);
  //       setCurrentPage(pageNumber);
  //   }
  
  //   const getPaginatedData = () => {
  //       const startIndex = currentPage * dataLimit - dataLimit;
  //       const endIndex = startIndex + dataLimit;
  //       return data.slice(startIndex, endIndex);
  //   };
  
  //   const getPaginationGroup = () => {
  //       let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
  //       return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  //   };
  
  //   // return (
  //   //   ...
  //   // );
  // }