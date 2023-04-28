
const posts = [
    {
      id: 1,
      title: 'Buy the home of your dreams',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid necessitatibus unde. Sed placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:'/img/buy.jpg',
    },
    {
      id: 2,
      title: 'Let us help you sell your home',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid necessitatibus unde. Sed placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:'/img/sell.jpg',
    },
    {
      id: 3,
      title: 'Rent out your home',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid necessitatibus unde. Sed placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:'/img/rent.jpg',
    },
]

const Cards = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl">You are the priority</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Leave it to us to do the searching and you do the living.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="flex flex-col items-start justify-between shadow-md p-4 rounded-md">
                  <div className="relative w-full">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-primary-500 group-hover:text-gray-600">
                          {post.title}
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )
}

export default Cards
