'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Animals', [
      {
        photo1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Rothschild%27s_Giraffe_%28Giraffa_camelopardalis_rothschildi%29_male_%287068054987%29%2C_crop_%26_edit.jpg/800px-Rothschild%27s_Giraffe_%28Giraffa_camelopardalis_rothschildi%29_male_%287068054987%29%2C_crop_%26_edit.jpg',
        photo2: 'https://sverchokcorm.ru/wp-content/uploads/2021/07/girafy.jpg',
        photo3: 'https://s16.stc.yc.kpcdn.net/share/i/12/12390862/wr-960.webp',
        photo4: 'https://farm4.static.flickr.com/3368/3257309439_669f2f3a71_o.jpg',
        photo5: 'https://21mm.ru/upload/resize_cache/iblock/93a/658_9999_1/93aa6bfd7077c6bd7b298a683e920312.png',
        photo6: 'http://29palms.ru/photo/blog/animals/jiraf_2/resized/011_Blog_Pavla_Aksenova_V_mire_zhivotnyh_Zhirafy_Foto_zambezi_-_Depositphotos.jpg',
        name: 'Жираф',
        body: 'Жираф - парнокопытное млекопитающее из семейства жирафовых. Является самым высоким наземным животным планеты. Самцы жирафа достигают высоты до 5,5—6,1 м (около 1/3 длины составляет шея) и весят до 900—1200 кг. Самки, как правило, немного меньше и легче.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Animals', null, {});
  }
};
