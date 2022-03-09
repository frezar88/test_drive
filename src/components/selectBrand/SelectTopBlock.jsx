import React from 'react';
import MyTitle from "../UI/MyTitle";
import MySelect from "../UI/MySelect";
import style from './SelectTopBlock.module.css'

const SelectTopBlock = ({data, children,getState}) => {
    return (
        <div className={style.selectionTopBlock}>
            <MyTitle>{children.title}</MyTitle>
            <div className={style.SelectWrapper}>
                <MySelect
                    getState={getState}
                    loading={!data}
                    disabled={!data}
                    data={data}>{children.sel}
                </MySelect>
            </div>
        </div>
    );
};

export default SelectTopBlock;