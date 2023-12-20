import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './OurFriendsItem.module.scss';

const OurFriendCard = ({ title, logo, timeTittle, timeOptions, address, linkadress, email, phone }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownVisible(false);
    };
    return (
        <li className={styles.card}>
            <h2 className={styles.card__title}>{title}</h2>
            <div className={styles.card__wrap}>
                <div className={styles.card__frame}>
                    <img src={logo} alt={`${title} logo`} />
                </div>

                <ul className={styles.card__list}>
                    <li className={styles.card__listItemTime}>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className={styles.card__labelTime}>Time:</div>
                            <div className={styles.card__dataTime}>{timeTittle}</div>
                            {isDropdownVisible && (
                                <ul className={styles.dropDown}>
                                    {timeOptions.map((option, index) => (
                                        <li key={index}>{option}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                    <li className={styles.card__listItem}>
                        <span className={styles.card__label}>Address:</span>
                        <span className={styles.card__data}>
                            {' '}
                            <a href={linkadress} target="_blank" rel="noreferrer">
                                <address>{address}</address>
                            </a>
                        </span>
                    </li>
                    <li className={styles.card__listItem}>
                        <span className={styles.card__label}>Email:</span>
                        <span className={styles.card__data}>
                            <a href="mailto:{email}">{email}</a>
                        </span>
                    </li>
                    <li className={styles.card__listItem}>
                        <span className={styles.card__label}>Phone:</span>
                        <span className={styles.card__data}>
                            <a href="tel:{phone}">{phone}</a>
                        </span>
                    </li>
                </ul>
            </div>
        </li>
    );
};

OurFriendCard.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    timeTittle: PropTypes.string.isRequired,
    timeOptions: PropTypes.arrayOf(PropTypes.string.isRequired),
    address: PropTypes.string.isRequired,
    linkadress: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

const FriendsPage = () => {
    const friends = [
        {
            id: 1,
            title: 'ЛКП "ЛЕВ"',

            logo: require('../../../images/friends/lion.png'),
            timeTittle: '8:00- 19:00',
            timeOptions: [
                'MN 8:00 - 19:00',
                'TU 8:00 - 19:00',
                'WE 8:00 - 19:00',
                'TH 8:00 - 19:00',
                'FR 8:00 - 19:00',
                'SA 8:00 - 19:00',
                'SU 8:00 - 19:00',
            ],

            address: 'Promuslova Street, 56',
            linkadress: 'https://goo.gl/maps/hDwKTL4ZD76qgZmC8?coh=178573&entry=tt',
            email: 'lkplev@gmail.com',
            phone: '(032) 293-30-41',
        },

        {
            id: 3,
            title: 'Whiskas',

            logo: require('../../../images/friends/whiskas.png'),
            timeTittle: 'day and night',
            timeOptions: ['We are working day and night'],

            address: 'website only',
            linkadress: 'https://www.whiskas.ua/',
            email: 'whiskas@gmail.com',
            phone: '0–800–500–155',
        },
        {
            id: 4,
            title: 'Happy paw',

            logo: require('../../../images/friends/happypaw.png'),
            timeTittle: '09:00- 19:00',
            timeOptions: [
                'MN 9:00 - 19:00',
                'TU 9:00 - 19:00',
                'WE 9:00 - 19:00',
                'TH 9:00 - 19:00',
                'FR 9:00 - 19:00',
                'SA 9:00 - 19:00',
                'SU 9:00 - 19:00',
            ],

            address: 'Chota Rystaveli Street, 44',
            linkadress: 'https://goo.gl/maps/9gE3C8cMTBYTpyGeA?coh=178573&entry=tt',
            email: 'hello@happypaw.ua',
            phone: '+380 44 290-03-29',
        },


    ];

    return (
        <div className={styles.section}>
            <ul className={styles.friendsList}>
                {friends.map(friend => (
                    <OurFriendCard
                        key={friend.id}
                        title={friend.title}
                        logo={friend.logo}
                        timeTittle={friend.timeTittle}
                        timeOptions={friend.timeOptions}
                        address={friend.address}
                        linkadress={friend.linkadress}
                        email={friend.email}
                        phone={friend.phone}
                    />
                ))}
            </ul>
        </div>
    );
};

export default FriendsPage;
