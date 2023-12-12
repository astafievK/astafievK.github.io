import React from "react";

import classNames from "classnames";
import {userInfo} from "../../userInfo.ts";

interface ButtonMarkProps {
    counter: number;
    userId: number;
    workId: number;
    isPassed: number;
}

const ButtonMark: React.FC<ButtonMarkProps> = (props) => {
    const { counter, userId, workId, isPassed } = props;

    if (userInfo[0].role === "Студент") {
        return (
            <button
                className={classNames({ mark: true }, { passed: isPassed === 1 })}
            >
                {counter}
            </button>
        );
    }
    return (
        <button
            className={classNames({ markBtn: true }, { passed: isPassed === 1 })}
            data-userid={userId}
            data-workid={workId}
            data-passed={isPassed}
        >
            {counter}
        </button>
    );
};

export default ButtonMark;