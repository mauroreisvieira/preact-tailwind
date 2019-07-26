/** @jsx h */
import { h, Component } from 'preact'

export default class Home extends Component {
    constructor() {
        super()

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        if (event.keyCode !== 13) {
            this.setState({
                keyword: event.target.value,
            })
        }
    }

    render() {
        return (
            <section>
                <form class="w-full max-w-sm">
                    <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
                        <input
                            value={this.state.keyword}
                            onKeyUp={this.handleInputChange}
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Jane Doe"
                            aria-label="Full name"
                        />
                    </div>
                </form>
                <h1 class="bold mt-4">
                    <strong>Keyword:</strong> {this.state.keyword}
                </h1>
            </section>
        )
    }
}
