import styles from './EventItem.module.scss';
import {Link, useNavigate} from 'react-router-dom';

const EventItem = ({event}) => {
    const {
        id,
        title,
        desc: description,
        'img-url': image,
        'start-date': date,
    } = event;

    const navigate = useNavigate();

    const handleDelete = async () => {

        const cofirmed = window.confirm('정말로 삭제하시겠습니까?');

        if (!cofirmed){
            return;
        }
        try{
            const response = await fetch(`http://localhost:9000/api/events/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                alert('삭제가 완료되었습니다!')
                navigate('/events');
            }else {
                alert('삭제에 실패했습니다.')
            }
        }catch(error){
            console.error(error);
            alert('삭제 중 오류가 발생했습니다.')
        }

    };


    return (
        <article className={styles.event}>
            <img
                src={image}
                alt={title}
            />
            <h1>{title}</h1>
            <time>{date}</time>
            <p>{description}</p>
            <menu className={styles.actions}>
                <Link to={`edit`}>Edit</Link>
                <button
                    onClick={handleDelete}
                >Delete
                </button>
            </menu>
        </article>
    );
};

export default EventItem;
