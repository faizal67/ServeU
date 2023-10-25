const maidsRouter = require('express').Router()
const Maid = require('../models/maid')


// const maids = [
//     {
  //   id:'1',
  //   name: 'Anita Malakar',
  //   verified: 'true',
  //   rating: 4,
  //   mobile: 91 - 9899234324,
  //   whatsApp: 91 - 234405849,
  //   city: 'Delhi',
  //   address: 'Sector 45, Grurgram, 122003',
  //   experience: 2,
  //   language: ['Hindi', 'English'],
  //   expectedSalary: [10000, 15000],
  //   available: 'full Day',
  //   avialableAs: ['maid', 'childCare'],
  //   ExpertiseIn: ['Floor cleaning',
  //     'Utensil cleaning',
  //     'Dusting',
  //     'Vegetable chopping',
  //     'Watering plants',
  //     'Ironing clothes',
  //     'Give medicines',
  //     'Cook for patient',
  //     'Female patient',
  //     'On bed patient'],
  //   salary: {
  //     liveIN: [15000, 26750],
  //     fullDay: [12000, 18500],
  //     partTime: [1500, 2500]
  //   },
  //   age: 34,
  //   about: "I live with my son. He is study in school.",
  //   education: 5,
  //   withUsSince: '12-01-2022',
  //   previousExperience: {
  //     city: "delhi",
  //     salary: 20000,
  //     duration: [2018, 2022],
  //   },
  //   reviews: {
  //     userName: 'Unknown',
  //     text: 'She was very good in every work',
  //     rating: 3
  //   }
  // },
//   {
//     id: '2',
//     name: "Sunita Sharma",
//     verified: true,
//     rating: 4.5,
//     mobile: "+91-9876543210",
//     whatsApp: "+91-9876543210",
//     city: "Delhi",
//     address: "Sector 45, Gurugram, 122003",
//     experience: 3,
//     language: ["Hindi", "English"],
//     expectedSalary: [10000, 15000],
//     available: "Full Day",
//     availableAs: ['Maid', 'Childcare'],
//     expertiseIn: [
//       "Floor cleaning",
//       "Utensil cleaning",
//       "Dusting",
//       "Vegetable chopping",
//       "Watering plants",
//       "Ironing clothes",
//       "Give medicines",
//       "Cook for patient",
//       "Female patient",
//       "On bed patient"
//     ],
//     salary: {
//       "liveIn": [15000, 26750],
//       "fullDay": [12000, 18500],
//       "partTime": [1500, 2500]
//     },
//     age: 32,
//     about: "I live with my family and have been working as a maid for the past three years. I am a hardworking and reliable person.",
//     education: 5,
//     withUsSince: '12-01-2020',
//     previousExperience: {
//       city: 'Delhi',
//       salary: '20000',
//       duration: [2017,2020]
//      },
//      reviews: {
//         userName: 'Rajesh Kumar',
//         text: 'Sunita is a very hardworking and reliable maid. She has been working for us for the past two years and we are very happy with her work.',
//         rating: '5'
//      }
//   },
//   {
//     id: '3',
//     name: "Sarika Singh",
//     verified: true,
//     rating: 4.2,
//     mobile: "+91-9876543210",
//     whatsApp: "+91-9876543210",
//     city: "Delhi",
//     address: "Sector 45, Gurugram, 122003",
//     experience: 2,
//     language: ["Hindi", "English"],
//     expectedSalary: [10000, 15000],
//     available: "Full Day",
//     availableAs: ["Maid", "Childcare"],
//     expertiseIn: [
//       "Floor cleaning",
//       "Utensil cleaning",
//       "Dusting",
//       "Vegetable chopping",
//       "Watering plants",
//       "Ironing clothes",
//       "Give medicines",
//       "Cook for patient",
//       "Female patient",
//       "On bed patient"
//     ],
//     salary: {
//       "liveIn": [15000, 26750],
//       "fullDay": [12000, 18500],
//       "partTime": [1500, 2500]
//     },
//     age: 30,
//     about: "I am a hardworking and reliable person. I have been working as a maid for the past two years and have experience in all household chores.",
//     education: 5,
//     withUsSince: '12-01-2021',
//     previousExperience: {
//       city: 'Delhi',
//       salary: '20000',
//       duration: [2019,2021]
//      },
//      reviews: {
//         userName: 'Rahul Gupta',
//         text: 'Sarika is a very hardworking and reliable maid. She has been working for us for the past two years and we are very happy with her work.',
//         rating: '4'
//      }
//   },
//   {
//     id: '4',
//     name: "Kavita Patel",
//     "verified": true,
//     "rating": 4.8,
//     "mobile": "+91-9876543210",
//     "whatsApp": "+91-9876543210",
//     "city": "Mumbai",
//     "address": "Sector 45, Grurgram, 122003",
//     "experience": 5,
//     "language": ["Hindi", "English"],
//     "expectedSalary": [15000,20000],
//     "available": ["Full Day", 'Part Time'],
//     'availableAs': ['Maid', 'Cook'],
//      expertiseIn: [
//        'Floor cleaning',
//        'Utensil cleaning',
//        'Dusting',
//        'Vegetable chopping',
//        'Watering plants',
//        'Ironing clothes',
//        'Cooking Indian dishes'
//      ],
//      salary: {
//        liveIn: [20000,30000],
//        fullDay: [15000,25000],
//        partTime: [2000,3000]
//      },
//      age:35,
//      about:"I am a hardworking and reliable person. I have been working as a maid for the past five years and have experience in all household chores.",
//      education:7,
//      withUsSince:'12-01-2016',
//      previousExperience:{
//        city:'Mumbai',
//        salary:'25000',
//        duration:[2013,2016]
//      },
//      reviews:{
//        userName:'Rajesh Sharma',
//        text:'Kavita is a very hardworking and reliable maid. She has been working for us for the past three years and we are very happy with her work.',
//        rating:'5'
//      }
//   },
//   {
//     id: '5',
//   "name":"Anjali Gupta",
//   "verified":"true",
//   "rating":"4.5",
//   "mobile":"+91-9876543210",
//   "whatsApp":"+91-9876543210",
//   "city":"Delhi",
//   "address":"Sector -45 Gurugram,122003",
//   "experience":"3 years",
//   "language":["Hindi","English"],
//   "expectedSalary":[10000,15000],
//   "available":"Full Day",
//   "availableAs":["Maid","Childcare"],
//   "expertiseIn":["Floor cleaning","Utensil cleaning","Dusting","Vegetable chopping","Watering plants","Ironing clothes","Give medicines","Cook for patient","Female patient","On bed patient"],
//   "salary":{
//   "liveIn":[15000,26750],
//   "fullDay":[12000,18500],
//   "partTime":[1500,2500]
//   },
//   "age":"32 years old",
//   "about":"I am a hardworking and reliable person. I have been working as a maid for the past three years and have experience in all household chores.",
//   "education":"5th standard passout.",
//   "withUsSince":"12-01-2020.",
//   "previousExperience":{
//   "city":"Delhi.",
//   "salary":"20000.",
//   "duration":[2017,2020]
//   },
//   reviews:{
//     userName:'Rajesh Sharma',
//     text:'Kavita is a very hardworking and reliable maid. She has been working for us for the past three years and we are very happy with her work.',
//     rating:'5'
//     }
//   },
//   {
//     id: '6',
//     "name": "Sarika Singh",
//     "verified": true,
//     "rating": 4.2,
//     "mobile": "+91-9876543210",
//     "whatsApp": "+91-9876543210",
//     "city": "Delhi",
//     "address": "Sector 45, Gurugram, 122003",
//     "experience": 2,
//     "language": ["Hindi", "English"],
//     "expectedSalary": [10000, 15000],
//     "available": "Full Day",
//     "availableAs": ["Maid", "Childcare"],
//     "expertiseIn": [
//       "Floor cleaning",
//       "Utensil cleaning",
//       "Dusting",
//       "Vegetable chopping",
//       "Watering plants",
//       "Ironing clothes",
//       "Give medicines",
//       "Cook for patient",
//       "Female patient",
//       "On bed patient"
//     ],
//     "salary": {
//       "liveIn": [15000, 26750],
//       "fullDay": [12000, 18500],
//       "partTime": [1500, 2500]
//     },
//     "age": 30,
//     "about": "I am a hardworking and reliable person. I have been working as a maid for the past two years and have experience in all household chores.",
//     "education": 5,
//     "withUsSince": '12-01-2021',
//     "previousExperience": {
//       city: 'Delhi',
//       salary: '20000',
//       duration: [2019,2021]
//      },
//      reviews: {
//         userName: 'Rahul Gupta',
//         text: 'Sarika is a very hardworking and reliable maid. She has been working for us for the past two years and we are very happy with her work.',
//         rating: '4'
//      }
//   },
//   {
//     id: '7',
//   "name":"Anjali Gupta",
//   "verified":"true",
//   "rating":"4.5",
//   "mobile":"+91-9876543210",
//   "whatsApp":"+91-9876543210",
//   "city":"Delhi",
//   "address":"Sector -45 Gurugram,122003",
//   "experience":"3 years",
//   "language":["Hindi","English"],
//   "expectedSalary":[10000,15000],
//   "available":"Full Day",
//   "availableAs":["Maid","Childcare"],
//   "expertiseIn":["Floor cleaning","Utensil cleaning","Dusting","Vegetable chopping","Watering plants","Ironing clothes","Give medicines","Cook for patient","Female patient","On bed patient"],
//   "salary":{
//   "liveIn":[15000,26750],
//   "fullDay":[12000,18500],
//   "partTime":[1500,2500]
//   },
//   "age":"32 years old",
//   "about":"I am a hardworking and reliable person. I have been working as a maid for the past three years and have experience in all household chores.",
//   "education":"5th standard passout.",
//   "withUsSince":"12-01-2020.",
//   "previousExperience":{
//   "city":"Delhi.",
//   "salary":"20000.",
//   "duration":[2017,2020]
//   },
//   "reviews":{
//         userName: 'Unknown',
//         text: 'Anjali is a very hardworking and reliable maid. She has been working for us for the past two years and we are very happy with her work.',
//         rating: '4'
//      }
//   },
//   {
//     id: '8',
//   "name":"Pooja Singh",
//   "verified":"true",
//   "rating":"4.8",
//   "mobile":"+91-9876543210",
//   "whatsApp":"+91-9876543210",
//   "city":"Mumbai.",
//   "address":"Sector 45, Grurgram, 122003",
//   "experience":"5 years.",
//   "language":["Hindi.","English."],
//   "expectedSalary":[15000,20000],
//   "available":["Full Day.",'Part Time.'],
//   'availableAs': ['Maid.', 'Cook.'],
//      expertiseIn: [
//        'Floor cleaning.',
//        'Utensil cleaning.',
//        'Dusting.',
//        'Vegetable chopping.',
//        'Watering plants.',
//        'Ironing clothes.',
//        'Cooking Indian dishes.'
//      ],
//      salary: {
//        liveIn: [20000,30000],
//        fullDay: [15000,25000],
//        partTime: [2000,3000]
//      },
//      age:"35 years old.",
//      about:"I am a hardworking and reliable person. I have been working as a maid for the past five years and have experience in all household chores.",
//      education:"7th standard passout.",
//      withUsSince:'12-01-2016.',
//      previousExperience:{
//        city:'Mumbai.',
//        salary:'25000.',
//        duration:[2013,2016]
//      },
//      reviews:{
//        userName:'Unknown',
//        text:'Pooja is a very hardworking and reliable'
//      }
//   },
//   {
//     id: '9',
//     "name": "Suman Kumari",
//     "verified": true,
//     "rating": 4.7,
//     "mobile": "+91-9876543210",
//     "whatsApp": "+91-9876543210",
//     "city": "Mumbai",
//     "address": "Sector 45, Grurgram, 122003",
//     "experience": 4,
//     "language": ["Hindi", "English"],
//     "expectedSalary": [12000, 18000],
//     "available": ["Full Day", 'Part Time'],
//     'availableAs': ['Maid', 'Cook'],
//      expertiseIn: [
//        'Floor cleaning',
//        'Utensil cleaning',
//        'Dusting',
//        'Vegetable chopping',
//        'Watering plants',
//        'Ironing clothes',
//        'Cooking Indian dishes'
//      ],
//      salary: {
//        liveIn: [18000,28000],
//        fullDay: [12000,20000],
//        partTime: [1500,3000]
//      },
//      age:33,
//      about:"I am a hardworking and reliable person. I have been working as a maid for the past four years and have experience in all household chores.",
//      education:6,
//      withUsSince:'12-01-2018',
//      previousExperience:{
//        city:'Mumbai',
//        salary:'22000',
//        duration:[2015,2018]
//      },
//      reviews:{
//        userName:'Unknown',
//        text:'Suman is a very hardworking and reliable maid. She has been working for us for the past two years and we are very happy with her work.',
//        rating:'5'
//      }
//   },
//   {
//     id: '10',
//   "name":"Kiran Sharma",
//   "verified":"true",
//   "rating":"4.5",
//   "mobile":"+91-9876543210",
//   "whatsApp":"+91-9876543210",
//   "city":"Delhi.",
//   "address":"Sector -45 Gurugram,122003",
//   "experience":"2 years.",
//   "language":["Hindi.","English."],
//   "expectedSalary":[10000,15000],
//   "available":"Full Day.",
//   "availableAs":["Maid.","Childcare."],
//   "expertiseIn":["Floor cleaning.","Utensil cleaning.","Dusting.","Vegetable chopping.","Watering plants.","Ironing clothes.","Give medicines.","Cook for patient.","Female patient.","On bed patient."],
//   "salary":{
//   "liveIn":[15000,26750],
//   "fullDay":[12000,18500],
//   "partTime":[1500,2500]
//   },
//   "age":"30 years old.",
//   "about":"I am a hardworking and reliable person. I have been working as a maid for the past two years and have experience in all household chores.",
//   "education":"5th standard passout.",
//   "withUsSince":"12-01-2021.",
//   "previousExperience":{
//   "city":"Delhi.",
//   "salary":"20000.",
//   "duration":[2019,2021]
//   },
//   "reviews":{
//         userName: 'Unknown',
//         text: 'Kiran is a very hardworking and reliable maid. She has been working for us for the past two years and we are very happy with her work.',
//         rating: '4'
//      }
//   },
//   {
//     id: '11',
//   "name":"Rajni Singh",
//   "verified":"true",
//   "rating":"4.8",
//   "mobile":"+91-9876543210",
//   "whatsApp":"+91-9876543210",
//   "city":"Mumbai.",
//   "address":"",
//   "experience":"5 years.",
//   "language":["Hindi.","English."],
//   "expectedSalary":[15000,20000],
//   "available":["Full Day.",'Part Time.'],
//   'availableAs': ['Maid.', 'Cook.'],
//      expertiseIn: [
//        'Floor cleaning.',
//        'Utensil cleaning.',
//        'Dusting.',
//        'Vegetable chopping.',
//        'Watering plants.',
//        'Ironing clothes.',
//        'Cooking Indian dishes.'
//      ],
//      salary: {
//        liveIn: [20000,30000],
//        fullDay: [15000,25000],
//        partTime: [2000,3000]
//      },
//      age:"35 years old.",
//      about:"I am a hardworking and reliable person. I have been working as a maid for the past five years and have experience in all household chores.",
//      education:"7th standard passout.",
//      withUsSince:'12-01-2016.',
//      previousExperience:{
//        city:'Mumbai.',
//        salary:'25000.',
//        duration:[2013,2016]
//      },
//      reviews:{
//        userName:'Unknown',
//        text:'Rajni is a very hardworking and reliable maid. She has been working for us for the past three years and we are very happy with her work.',
//        rating:'5'
//       }
//     }  
//   ]


maidsRouter.post('/', async (request, response) => {
  const {name, gender, verified, rating, mobile, whatsApp, city, address, experience, language, expectedSalary, available, availableAs, expertiseIn, salary, age, about, education, withUsSince, previousExperience,reviews,} = request.body
  if (name === undefined) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  const maid = new Maid({
    name,
    gender,
    verified,
    rating,
    mobile,
    whatsApp,
    city,
    address,
    experience,
    language,
    expectedSalary,
    available,
    availableAs,
    expertiseIn,
    salary,
    age,
    about,
    education,
    withUsSince,
    previousExperience,
    reviews
  })
  const savedMaid = await maid.save()
  response.json(savedMaid)
})

maidsRouter.get('/', async (request, response) => {
  const maids = await Maid.find({})
  response.json(maids)
})

maidsRouter.get('/:id', async (request, response) => {
  const id = request.params.id
  const maid = await Maid.findById(id)
  if (maid) {
    response.json(maid)
  }
  else {
    response.status(404).end()
  }
})

maidsRouter.delete('/:id', (request, response) => {
  Maid.findByIdAndRemove(request.params.id)
    .then(response.status(204).end())
})


maidsRouter.put('/:id', (request, response) => {
  const body = request.body
  const maid = body
  Maid.findByIdAndUpdate(request.params.id, maid, { new: true })
    .then(updatedMaid => {
      response.json(updatedMaid)
    })
    .catch(error => next(error))
})


module.exports = maidsRouter