

export function filtering(
    arr=[],
    config={name:null, image_url:null, species:null, personality:null, gender:null, birthday_month:null, birthday_day:null, appearances:null, nh_details: {catchphrase:null, hobby:null, house_music:null,}}
){

    const {name, image_url, species, personality, gender, birthday_month, birthday_day, appearances, nh_details} = config;

    if(name || image_url || species || personality || gender || birthday_month || birthday_day || appearances || nh_details) {

        const filtered_arr = arr.filter((o)=> {
            var cond = true;

            if(name) {
                cond = cond && o.name.includes(name);
            }
            if(image_url) {
                cond = cond && o.image_url.includes(image_url);
            }
            if(species) {
                cond = cond && o.species.includes(species);
            }
            if(personality) {
                cond = cond && o.personality.includes(personality);
            }
            if(gender) {
                cond = cond && o.gender.includes(gender);
            }
            if(birthday_month) {
                cond = cond && o.birthday_month.includes(birthday_month);
            }
            if(birthday_day) {
                cond = cond && o.birthday_day.includes(birthday_day);
            }
            if(appearances) {
                cond = cond && o.appearances.includes(appearances);
            }
            if(nh_details) {
                cond = cond && o.nh_details.includes(nh_details);
            }
            return cond;

        }) 
        return filtered_arr;
    } else {
        return [];
    }
}

// const acnh = require('./ac-villagers.json')

// var villagers = filtering(acnh, {
//     personality: "Cranky"
// })

// console.log(villagers)