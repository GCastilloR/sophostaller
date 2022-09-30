import { React, useState, useEffect } from 'react'
import axios from "axios"

const User = (props) => {
    const [name, setName] = useState("")
    const [lastname, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [birth, setBirth] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [pass, setPass] = useState("****")
    const [pic, setPic] = useState()
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/")
                const user = response.data.results[0]
                setName(user.name.first)
                setLast(user.name.last)
                setEmail(user.email)
                setBirth(user.dob.date.substring(0, 10))
                setAddress(`${user.location.street.number} ${user.location.street.name}`)
                setPhone(user.phone)
                setPass(user.login.password)
                setPic(user.picture.large)

            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])
    return (
        <div>
            <img className="profpic" src={pic} alt="" />

            {props.show === "name" && <>
                <h5 className="subtitle">My name is</h5>
                <p className="data">{name} {lastname}</p>
            </>}
            {props.show === "email" && <>
                <h5 className="subtitle">My email address is</h5>
                <p className="data">{email}</p>
            </>}
            {props.show === "birth" && <>
                <h5 className="subtitle">My birthday is on</h5>
                <p className="data">{birth}</p>
            </>}
            {props.show === "address" && <>
                <h5 className="subtitle">My home address is</h5>
                <p className="data">{address}</p>
            </>}
            {props.show === "number" && <>
                <h5 className="subtitle">My phone number is</h5>
                <p className="data">{phone}</p>
            </>}
            {props.show === "pass" && <>
                <h5 className="subtitle">My password is</h5>
                <p className="data">{pass}</p>
            </>}
        </div>
    )
}

export default User
