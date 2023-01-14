export default function GenderImage(gender: "Male"|"Female"){
    if(gender==="Female"){
        return "https://res.cloudinary.com/jewbreel1/image/upload/v1625737170/jewbreel/sms/female_avatar_pgqx9s.png"
    }
    else {
        return "https://res.cloudinary.com/jewbreel1/image/upload/v1625737172/jewbreel/sms/male_avatar_c3v0vu.png"
    }
}