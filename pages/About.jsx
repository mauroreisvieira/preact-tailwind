/** @jsx h */
import { h, Component } from 'preact'

export default  class About extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <section class="flex flex-wrap -m-3">
                {[1, 2, 3, 4].map((item, key) => (
                    <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
                        <div class="rounded overflow-hidden shadow-lg">
                            <img
                                class="w-full"
                                src="https://images.unsplash.com/photo-1556909114-a1d34f47412c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                                alt="Sunset in the mountains"
                            />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                    The Coldest Sunset
                                </div>
                                <p class="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatibus quia, nulla!
                                    Maiores et perferendis eaque, exercitationem
                                    praesentium nihil.
                                </p>
                            </div>
                            <div class="px-6 py-4">
                                <span class="inline-block bg-red-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                    #photography
                                </span>
                                <span class="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                    #travel
                                </span>
                                <span class="inline-block bg-green-400 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                    #winter
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        )
    }
}
