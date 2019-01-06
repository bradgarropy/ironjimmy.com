import React from "react"
import "../scss/SleeveForm.scss"

const SleeveForm = () => {
    return (
        <div className="sleeve-form">
            <div className="sleeve-form-field">
                <label>Weight</label>
                <select>
                    <option value="20">20KG</option>
                    <option value="15">15KG</option>
                </select>
            </div>

            <div className="sleeve-form-field">
                <label>Brand</label>
                <input type="text"/>
            </div>

            <div className="sleeve-form-field">
                <label>Model</label>
                <input type="text"/>
            </div>

            <button>Buy</button>
        </div>
    )
}

export default SleeveForm
