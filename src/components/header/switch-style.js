import { makeStyles } from '@material-ui/core/styles';
import polishFlag from '../../images/plF.png'
import englishFlag from "../../images/enF.png"

const style = makeStyles({
    root: {
        width: 48,
        height: 80,
        padding: 8,
        margin: 10,
    },
    switchBase: {
        padding: 11,
        color: '#ff6a00',
        '&:hover': {
            backgroundColor: 'rgba(255,106,0,0.08)',
        },
    },
    thumb: {
        width: 26,
        height: 26,
        backgroundColor: '#fff',
        backgroundImage: `url(${polishFlag})`,
        backgroundPosition: 'center',
        backgroundSize: '25px 25px',

    },
    track: {
        background: 'linear-gradient(to right, #898F9D, #898F9D)',
        opacity: '1 !important',
        borderRadius: 20,

    },
    checked: {
        '&$switchBase': {
            color: '#185AFF',
            transform: 'translateY(32px)',
            '&:hover': {
                backgroundColor: 'rgba(24,90,257,0.08)',
            },
        },
        '& $thumb': {
            backgroundColor: '#fff',
            backgroundImage: `url(${englishFlag})`,
            backgroundPosition: 'center',
            backgroundSize: '25px 25px',
        },
    },
})

export default style