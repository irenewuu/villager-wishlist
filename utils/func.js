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

export function GoToPage(p=1, arr=[], num=10) {
    const lists = arr.slice((p-1)*num, p*num);
    return lists;
}
