import BookmarkIcon from "../bookmarks/BookmarkIcon";

import { TJobItem } from "../../lib/types";

type JobListItemProps = {
  jobItem: TJobItem;
  isActive: boolean;
};

export default function JobListItem({ jobItem, isActive }: JobListItemProps) {
  const { title, badgeLetters, company, daysAgo, id } = jobItem;
  return (
    <li className={`job-item ${isActive && "job-item--active"}`}>
      <a href={`#${id}`} className='job-item__link'>
        <div className='job-item__badge'>{badgeLetters}</div>

        <div className='job-item__middle'>
          <h3 className='third-heading'>{title}</h3>
          <p className='job-item__company'>{company}</p>
        </div>

        <div className='job-item__right'>
          <BookmarkIcon id={id} />
          <time className='job-item__time'>{daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
