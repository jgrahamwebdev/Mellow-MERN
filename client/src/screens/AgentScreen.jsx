
import Navbar from "../components/Navbar"

const people = [
    {
      name: 'Mark Davis',
      role: 'Re-Max Real Estate',
      imageUrl: '/img/agent-1.jpg',
      phone: '555-555-5555',
      stars: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️'
    },
    {
      name: 'Linda Stephens',
      role: 'Luxury Real Estate',
      imageUrl: '/img/agent-2.jpg',
      phone: '555-555-5555',
      stars: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️'
    },
    {
      name: 'James Michaels',
      role: 'Homes 4 U Real Estate',
      imageUrl: '/img/agent-3.jpg',
      phone: '555-555-5555',
      stars: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️'
    },
    {
      name: 'David Carlson',
      role: 'Re-Max Real Estate',
      imageUrl: '/img/agent-6.jpg',
      phone: '555-555-5555',
      stars: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️'
    },
    {
      name: 'Benjamin Ma',
      role: 'Homes 4 U Real Estate',
      imageUrl: '/img/agent-7.jpg',
      phone: '555-555-5555',
      stars: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️'
    },
    {
      name: 'Lisa Dixon',
      role: 'Team Dixon Real Estate',
      imageUrl: '/img/agent-8.jpg',
      phone: '555-555-5555',
      stars: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️'
    },

  ]

const AgentScreen = () => {
    return (
        <div>
            <Navbar />

            <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl underline-offset-2 underline underline-black">Real Estate Agents</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find a real estate agent that suits your home selling needs.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name} className="flex items-center justify-center flex-col">
              <img className="aspect-[1/1] w-3/4 md:w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="text-base leading-7 font-bold text-primary-500">{person.phone}</p>
              <p>{person.stars}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
        </div>
    )
}

export default AgentScreen
