import React, { useState  , useRef } from 'react'
import Select from 'react-select'
import classname from './Calculator.module.css'

const Calculator = (props) => {
    let weightelem = useRef()
    let length = useRef();
    let width = useRef()
    let deep = useRef();

    const [typeSize , setTypeSize] = useState(null);
    const [country, setCountry] = useState(null)
    const [sum , setSum] = useState(0)
    const [weight , setWeight] = useState(0)

    const onChangeTypeSize = value => {
        let val = value.value;
        setTypeSize(val);
    }
    const onChangeCountry = value => {
        let val = value.value;
        setCountry(val);
    }

    const sizeMath = () => {
        let sizeMathWeight = (width.current.value * length.current.value * deep.current.value)/6000;
        setWeight(sizeMathWeight);
    };


    const resultSum = () => {
        console.log(weight)
        console.log(country)
        if(typeSize === 'weight'){
            if(props.one.includes(country)){
                setSum(props.priceOne(weight))
            }else if(props.two.includes(country)){
                setSum(props.priceTwo(weight))
            }else if(props.three.includes(country)){
                setSum(props.priceThree(weight))
            }else if(props.four.includes(country)){
                setSum(props.priceFour(weight))
            }else if(props.five.includes(country)){
                setSum(props.priceFive(weight))
            }
        }else{
            if(props.one.includes(country)){
                sizeMath()
                setSum(props.priceOne(weight))
            }else if(props.two.includes(country)){
                sizeMath()
                setSum(props.priceTwo(weight))
            }
            else if(props.three.includes(country)){
                sizeMath()
                setSum(props.priceThree(weight))
            }else if(props.four.includes(country)){
                sizeMath()
                setSum(props.priceFour(weight))
            }else if(props.five.includes(country)){
                sizeMath()
                setSum(props.priceFive(weight))
            }
        }
        }


    const weightChange = () => {
        setWeight(weightelem.current.value)
    }
    return (
        <div className ={classname.wrapper}>
            <h1>КАЛЬКУЛЯТОР СТОИМОСТИ ЭКСПОРТА</h1>
            <div className={classname.content}>
                <Select placeholder='Выберите страну' onChange={(value) => {onChangeCountry(value)}} options={props.all} className={classname.typeCountry}/>
                <Select placeholder='Выберите тип груза' className={classname.typeOfPackage} options={props.top} />
                <Select placeholder='Размер/Вес' onChange={(value) => {onChangeTypeSize(value);console.log(typeSize)}}  className={classname.typeOfSize} options={props.tos} />
                <div className={`${typeSize === 'weight' ? '' : classname.fade}  ${classname.flex}`}>
                    <div className={classname.input__block}>
                        <span>Введите вес (кг)</span>
                        <input ref={weightelem} onChange={weightChange} type="text" size="40"></input>
                    </div>
                </div>
                <div className={` ${typeSize === 'size' ? '' : classname.fade} ${classname.flex} `}>
                    <div className={classname.input__block}>
                        <span>Введите длину (см)</span>
                        <input ref={length} type="text" size="40"></input>
                    </div>
                    <div className={classname.input__block}>
                        <span>Введите ширину (см)</span>
                        <input ref={width} type="text" size="40"></input>
                    </div>
                    <div className={classname.input__block}>
                        <span>Введите глубину (см)</span>
                        <input ref={deep} type="text" size="40"></input>
                    </div>
                </div>
                <button className={classname.calc__btn} onClick={resultSum}>Рассчитать стоимость</button>
                <div className={classname.result}>
                    <span>Итог: {sum}$ </span>
                </div>

            </div>
        </div>
    )
}
export default Calculator