import React, { Component } from "react";
import "./Quicksearch.css";
import QuickSearchdis from "./QuickSearchdis"

class QuickSearch extends Component {
    render() {
        return (
            <div className="quickSearch">
                <span className="QuickSearchHeading">
                    QuickSearch !
                </span>
                <span className="QuickSubHeading">
                    Find Restaurent By Meals Types !
                </span>
                <div>
                    <QuickSearchdis />
                </div>

            </div>
        )
    }
}
export default QuickSearch;
