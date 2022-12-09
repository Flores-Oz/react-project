import PropTypes from 'prop-types';

export function Button({text, name="Joe"}){
    return <button onClick={function(){
        console.log('Hola Mundo')
    }}>
        {text} {name}
    </button>
}

Button.prototype = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: "User"
}

