import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CardItems = ({
  item, favorite, lock, toolTip, progressBar
}) => (
  <div>
    <div className="col s12 m6 l4">
      <div className="card">
        <div className={`card-header ${progressBar[0]}`}>
          <span className="card-title">{item.name}</span>
          <a
            href="#!"
            data-tip="Add to favorites"
            className={`btn-floating halfway-fab waves-effect waves-light favorite-btn ${favorite}`}
          >
            <i className="material-icons">favorite</i>
          </a>
        </div>
        <div className="card-description black-text">
          <p>{item.description}</p>
        </div>
        <div className="card-icons">
          <div
            className="row progress-bar"
            id="progress-bar"
            data-tip={`${item.progress}%`}
          >
            <div className={`progress center-block col s12 ${progressBar[1]}`}>
              <div
                className={`determinate ${progressBar[0]}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
          <NavLink
            to={`teams/${item.id}`}
            className=" waves-effect waves-light uppercase"
          >
            View team
          </NavLink>
          <i className="tiny-small material-icons right" data-tip={toolTip}>
            {lock}
          </i>
          <a
            className="waves-effect waves-light right modal-trigger icon-link"
            href="#addMember"
          >
            <i className="tiny-small material-icons" data-tip="add member">
              person_add
            </i>
          </a>
          <i
            className="tiny-small material-icons right"
            data-tip={`manage ${item.members} member(s)`}
          >
            groups
          </i>

          <i
            className="tiny-small material-icons right"
            data-tip="admin settings"
          >
            settings
          </i>
        </div>
      </div>
    </div>
  </div>
);

CardItems.propTypes = {
  item: PropTypes.object.isRequired,
  favorite: PropTypes.string.isRequired,
  lock: PropTypes.string.isRequired,
  toolTip: PropTypes.string.isRequired,
  progressBar: PropTypes.array.isRequired
};
export default CardItems;
