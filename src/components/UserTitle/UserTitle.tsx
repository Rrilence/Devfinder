import { LocalGithubUser } from 'types';
import styles from './UserTitle.module.scss';

interface UserTitleProps extends Pick<LocalGithubUser, 'name' | 'login' | 'created'>{ }

const localDate = new Intl.DateTimeFormat('en-GB', { // переформатирование даты
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const UserTitle = ({ created, login, name }: UserTitleProps) => {

    const joinedDate = localDate.format(new Date(created))

  return (
  <div className={styles.userTitle} >
    <h2>{name}</h2>
    <h3>{login}</h3>
    <span>{joinedDate}</span>
  </div>
  )
};
