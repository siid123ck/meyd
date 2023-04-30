let jobs = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    address: '123 George St',
    postcode: '2000',
    state: 'NSW',
    clothingType: 'Shirt',
    images: ['image1.jpg', 'image2.jpg'],
    description: 'I need a shirt tailored.',
    budget: '100',
    status: 'open',
    makers: [
      {
        maker: 'maker_id_1',
        price: 80,
        comments: 'I can do this job by next week',
        status: 'pending'
      },
      {
        maker: 'maker_id_2',
        price: 90,
        comments: 'I can do this job by tomorrow',
        status: 'pending'
      }
    ]
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    phone: '123-456-7890',
    email: 'jane.doe@example.com',
    address: '456 Collins St',
    postcode: '3000',
    state: 'VIC',
    clothingType: 'Dress',
    images: ['image3.jpg'],
    description: 'I need a dress hemmed.',
    budget: '75',
    status: 'open',
    makers: [
      {
        maker: 'maker_id_3',
        price: 60,
        comments: 'I can do this job by the end of the day',
        status: 'pending'
      },
      {
        maker: 'maker_id_4',
        price: 80,
        comments: 'I can do this job by next week',
        status: 'pending'
      }
    ]
  },
  {
    id: 3,
    firstName: 'Bob',
    lastName: 'Smith',
    phone: '555-555-5555',
    email: 'bob.smith@example.com',
    address: '789 Kent St',
    postcode: '2000',
    state: 'NSW',
    clothingType: 'Suit',
    images: ['image4.jpg', 'image5.jpg'],
    description: 'I need a suit tailored.',
    budget: '200',
    status: 'open',
    makers: [
      {
        maker: 'maker_id_1',
        price: 180,
        comments: 'I can do this job by next week',
        status: 'pending'
      },
      {
        maker: 'maker_id_2',
        price: 200,
        comments: 'I can do this job by tomorrow',
        status: 'pending'
      }
    ]
  },
  {
    id: 4,
    firstName: 'Sarah',
    lastName: 'Lee',
    phone: '555-555-5555',
    email: 'sarah.lee@example.com',
    address: '321 Bourke St',
    postcode: '3000',
    state: 'VIC',
    clothingType: 'Pants',
    images: ['image6.jpg'],
    description: 'I need pants hemmed.',
    budget: '50',
    status:'open',
    makers: [
      {
        maker: '6101876a5b1e810d734db53c',
        price: 60,
        comments: 'I can get this done for you by next week.',
        status: 'pending'
      },
      {
        maker: '6101876a5b1e810d734db53d',
        price: 45,
        comments: 'I can complete this task for you in 2 days.',
        status: 'pending'
      }
    ]
  },
  {
    id: 5,
    firstName: 'Peter',
    lastName: 'Wong',
    phone: '555-555-5555',
    email: 'peter.wong@example.com',
    address: '456 Kent St',
    postcode: '2000',
    state: 'NSW',
    clothingType: 'Shirt',
    images: ['image12.jpg', 'image13.jpg'],
    description: 'I need a shirt tailored.',
    budget: '150',
    status:'open',
    makers: [
      {
        maker: '6101876a5b1e810d734db53e',
        price: 120,
        comments: 'I can finish this task in a week.',
        status: 'pending'
      },
      {
        maker: '6101876a5b1e810d734db53f',
        price: 90,
        comments: 'I can get this done for you in 3 days.',
        status: 'pending'
      }
    ]
  },
  {
    id: 6,
    firstName: 'Emily',
    lastName: 'Davis',
    phone: '555-555-5555',
    email: 'emily.davis@example.com',
    address: '123 George St',
    postcode: '2000',
    state: 'NSW',
    clothingType: 'Dress',
    images: ['image14.jpg'],
    description: 'I need a dress altered.',
    budget: '100',
    status:'open',
    makers: [
      {
        maker: '6101876a5b1e810d734db540',
        price: 80,
        comments: 'I can complete this task for you by tomorrow.',
        status: 'pending'
      },
      {
        maker: '6101876a5b1e810d734db541',
        price: 120,
        comments: 'I can get this done for you in a week.',
        status: 'pending'
      }
    ]
  }
]

export default jobs;