import React from "react";
import "./SearchOrder.scss";

export class SearchOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order_details: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // const history = useHistory();
    }

    handleChange(event) {
        this.setState({ order_details: event.target.value });
    }

    handleSubmit(event) {
        this.props.history.push(`/dashboard/${this.state.order_details}`);
    }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     axios
    //         .get(
    //             `http://localhost:8081/getOrder?key=${this.state.order_details}`
    //         )
    //         .then((res) => {
    //             // console.log("response",res)
    //             const order = {
    //                 ...res.data[0].Record,
    //                 orderId: this.state.order_details,
    //             };
    //             this.props.history.push({
    //                 pathname: "/dashboard",
    //                 order: order,
    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    render() {
        // console.log(this);
        // console.log(this.props.history);
        return (
            <div className="section-about">
                <div className="heading-secondary">
                    Produce Tracker: Secure Storage!
                </div>

                <div className="heading-small">Retrive your order</div>

                <div className="wrapper">
                    <h1 className="mini_header"> Enter Order ID </h1>
                    <input
                        type="text"
                        className="input-field input-group-sm"
                        value={this.state.order_details}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <button
                        className="field btn-small btn-primary"
                        onClick={(event) => this.handleSubmit(event)}
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}
