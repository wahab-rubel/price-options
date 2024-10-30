import PriceOption from "../PriceOption/PriceOption"


function PriceOptions() {
  const priceOptions = [
      {
        "id": 1,
        "name": "Basic Membership",
        "price": 25,
        "features": [
          "Access to gym equipment",
          "Locker room access",
          "1 fitness assessment per year"
        ]
      },
      {
        "id": 2,
        "name": "Standard Membership",
        "price": 45,
        "features": [
          "Access to gym equipment",
          "Locker room access",
          "2 fitness assessments per year",
          "Access to group fitness classes"
        ]
      },
      {
        "id": 3,
        "name": "Premium Membership",
        "price": 65,
        "features": [
          "Access to gym equipment",
          "Locker room access",
          "Unlimited fitness assessments",
          "Access to all group fitness classes",
          "1 personal training session per month"
        ]
      },
      {
        "id": 4,
        "name": "VIP Membership",
        "price": 85,
        "features": [
          "24/7 gym access",
          "Locker room access with personal locker",
          "Unlimited fitness assessments",
          "All group and specialty fitness classes",
          "3 personal training sessions per month"
        ]
      },
      {
        "id": 5,
        "name": "Family Membership",
        "price": 100,
        "features": [
          "Access for up to 4 family members",
          "Locker room access for all members",
          "Shared fitness assessments",
          "Family-friendly fitness classes",
          "1 personal training session per family"
        ]
      },
      {
        "id": 6,
        "name": "Student Membership",
        "price": 20,
        "features": [
          "Access to gym equipment",
          "Locker room access",
          "1 fitness assessment per semester",
          "Student-only fitness classes"
        ]
      },
      {
        "id": 7,
        "name": "Senior Membership",
        "price": 30,
        "features": [
          "Access to gym equipment",
          "Locker room access",
          "1 fitness assessment per quarter",
          "Senior-only fitness classes",
          "Discount on personal training sessions"
        ]
      },
      {
        "id": 8,
        "name": "Corporate Membership",
        "price": 120,
        "features": [
          "Access for up to 5 employees",
          "Locker room access with corporate lockers",
          "Quarterly fitness assessments for each member",
          "Corporate wellness workshops",
          "Discount on personal training for each member"
        ]
      },
      {
        "id": 9,
        "name": "Weekend Warrior",
        "price": 15,
        "features": [
          "Access to gym equipment on weekends",
          "Locker room access",
          "1 fitness assessment per year",
          "Weekend-only group fitness classes"
        ]
      },
      {
        "id": 10,
        "name": "Day Pass",
        "price": 10,
        "features": [
          "Access to gym equipment for one day",
          "Locker room access for one day",
          "1 group fitness class (if available)"
        ]
      }
    ]
    
  
  
  return (
    <div className="m-12">
      <h1 className="text-5xl mb-6">Best Price in the town</h1>
      <div className="container mx-auto grid md:grid-cols-2 gap-6">
      {
        priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
      </div>
    </div>
  )
}

export default PriceOptions
