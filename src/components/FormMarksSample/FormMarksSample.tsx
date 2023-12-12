import React from "react";

interface FormWorkSampleProps {

}

const FormWorkSample: React.FC<FormWorkSampleProps> = () => {
    return(
        <td>
            <form className="marks-sample">
                <span className="marks__title">Шаблон</span>
                <td className="sample">
                    <div className="mark cool">
                        <input type="text" maxLength={1} placeholder="5"/>
                    </div>
                    <div className="mark good">
                        <input type="text" maxLength={1} placeholder="4"/>
                    </div>
                    <div className="mark bad">
                        <input type="text" maxLength={1} placeholder="3"/>
                    </div>
                </td>
            </form>
        </td>
    )
}

export default FormWorkSample
