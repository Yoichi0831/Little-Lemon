
import { fromJS } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    topicList:
    [{
        id: 1,
        title: "Entree",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
    },
    {
        id: 2,
        title: "Main",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
    },
    {
            id: 3,
            title: "Dessert",
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
    },
    {
            id: 4,
            title: "Drink",
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
    }],

    articleList:
    [{
        "id": 1,
        "title": "Pane all’Aglio",
        "description": "Baked Olive Oil Baguette Bread with Garlic, Herbs, Butter and Mozzarella Cheese",
        "imgUrl": "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/51/74/10/yfwIpFc0Qzy24HWqVnVI_garlic%20bread.jpg"
      },
      {
        "id": 2,
        "title": "Tortiglioni al Ragù di Agnello",
        "description": "Fresh Tortiglioni Pasta with slow-braised Lamb Shoulder Ragù & Pecorino Romano Cheese",
        "imgUrl": "https://assets.epicurious.com/photos/56033a277bdffb1205b5d5a1/1:1/w_2560%2Cc_limit/51221430.jpg"
      },
      {
        "id": 3,
        "title": "Gnocchi Zucchine e Gamberi",
        "description": "Fresh Potato Gnocchi with Zucchini,Basil and Pistacchio Pesto, Cherry Tomatoes and Prawns",
        "imgUrl": "https://www.fattoincasadabenedetta.it/wp-content/uploads/2022/07/sito-04-Gnocchetti-crema-di-zucchine-e-gamberetti_copertina.jpg"
      }
      ],
    articlePage: 1
});


export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
            })
        case constants.ADD_HOME_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage
            })
        default:
            return state;
    }
}