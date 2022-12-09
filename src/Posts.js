import {VscBug} from 'react-icons/vsc' /** iMPORTAMOS ICONOS de React Iocons */

export const Posts = () =>{
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }}>
        <VscBug/>
        Traer Datos</button>
}