# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all
Collection.destroy_all

Book.create(
  title: 'Moby Dick',
  description: 'As for me, I am tormented with an everlasting itch for things remote. I love to sail forbidden seas, and land on barbarous coasts.',
  author: 'Herman Mellville',
  read_status: 'Not Read',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/51oCZKH93sL._SX310_BO1,204,203,200_.jpg'
)
Book.create(
  title: 'The Odyssey',
  description: 'Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man.',
  author: 'Homer',
  read_status: 'Not Read',
  image_url: 'https://images.gr-assets.com/books/1390173285l/1381.jpg'
)
Book.create(
  title: 'The Autocrat of the Breakfast Table ',
  description: 'I find the great thing in this world is not so much where we stand, as in what direction we are moving.',
  author: 'Oliver Wendell Holmes',
  read_status: 'Not Read',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/41ZtAZIA5qL._SX331_BO1,204,203,200_.jpg'
)
Book.create(
  title: 'Summa Theologica',
  description: 'Distinctions drawn by the mind are not necessarily equivalent to distinctions in reality.',
  author: 'Thomas Aquineas',
  read_status: 'Not Read',
  image_url: 'https://www.sophiainstitute.com/images/uploads/products/_small/9781933184708.jpg'
)
Book.create(
  title: 'Guilt and Sorrow',
  description: 'And homeless near a thousand homes I stood, And near a thousand tables pined and wanted food.',
  author: 'William Wordsworth',
  read_status: 'Not Read',
  image_url: 'https://cdn.faber.co.uk/media/catalog/product/cache/1/small_image/400x/040ec09b1e35df139433887a97daa66f/2/6/26749.books.origjpg.jpg'
)
Book.create(
  title: 'I, Robot',
  description: '1. A robot may not injure a human being or, through inaction, allow a human being to come to harm...',
  author: 'Isaac Asimov',
  read_status: 'Not Read',
  image_url: 'https://i.ebayimg.com/images/g/1FIAAOSwUKxYfn8U/s-l640.jpg'
)
Book.create(
  title: 'Art of War',
  description: 'Be extremely subtle, even to the point of formlessness. Be extremely mysterious, even to the point of soundlessness. Thereby you can be the director of the opponents fate.',
  author: 'Sun Tzu',
  read_status: 'Not Read',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/51zJrCoKg8L._SX308_BO1,204,203,200_.jpg'
)
Book.create(
  title: 'The Republic',
  description: 'I am the wisest man alive, for I know one thing, and that is that I know nothing.',
  author: 'Plato',
  read_status: 'Not Read',
  image_url: 'https://www.booksoftitans.com/assets/uploads/2017/01/the-republic.jpg'
)
Book.create(
  title: 'The Iliad',
  description: 'Like the generations of leaves, the lives of mortal men. Now the wind scatters the old leaves across the earth, now the living timber bursts with the new buds and spring comes round again. And so with men: as one generation comes to life, another dies away.',
  author: 'Homer',
  read_status: 'Not Read',
  image_url: 'https://i.pinimg.com/originals/b7/0e/ce/b70eceb9ac3eca8a20a523a32da30621.gif'
)
Book.create(
  title: 'Aesops Fables',
  description: 'The injury we do and the one we suffer are not weighed in the same scales.',
  author: 'Aesop',
  read_status: 'Not Read',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/61LWfFWoiiL._SX378_BO1,204,203,200_.jpg'
)
Book.create(
  title: 'Lysistrata',
  description: 'You man are fool enough, it seems, to dare to war with me (a woman), when for your faithful ally you might win me easily.',
  author: 'Aristophanes',
  read_status: 'Not Read',
  image_url: 'https://img1.od-cdn.com/ImageType-400/0293-1/F81/AEE/AC/%7BF81AEEAC-2399-48F1-9388-A6BB1EEA80C7%7DImg400.jpg'
)
Book.create(
  title: 'letters of Ignatius',
  description: 'Let no rank puff up anyone; for faith and love are paramount - the greatest blessings in the world.',
  author: 'Ignatius of Antioch',
  read_status: 'Not Read',
  image_url: 'https://images.gr-assets.com/books/1347925692l/6902973.jpg'
)
Book.create(
  title: 'As You Like it',
  description: 'All the world ‘s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.',
  author: 'Shakespeare',
  read_status: 'Not Read',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/51Wezx3Sw2L._SX311_BO1,204,203,200_.jpg'
)
Book.create(
  title: 'The Tempst',
  description: 'We are such stuff as dreams are made on, and our little life is rounded with a sleep.',
  author: 'Shakespeare',
  read_status: 'Not Read',
  image_url: 'http://www.loyalbooks.com/image/detail/Tempest-William-Shakespeare.jpg'
)
Book.create(
  title: 'A Midsummers Night’s Dream',
  description: 'Love looks not with the eyes, but with the mind; and therefore is winged Cupid painted blind.',
  author: 'Shakespeare',
  read_status: 'Not Read',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/518%2B%2BbJKp2L._SX321_BO1,204,203,200_.jpg'
)
Book.create(
  title: 'Julius Caesar ',
  description: 'The evil that men do lives after them; The good is oft interred with their bones.',
  author: 'Shakespeare',
  read_status: 'Not Read',
  image_url: 'https://www.memoriapress.com/wp-content/uploads/2017/06/Julius-Caesar-Student-6x9.jpg'
)
Book.create(
  title: 'Alarms and Discursions',
  description: 'Poets have been mysteriously silent on the subject of cheese.',
  author: 'G.K. Chesterton',
  read_status: 'Not Read',
  image_url: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781609773557/alarms-and-discursions-9781609773557_lg.jpg'
)
Book.create(
  title: 'The Collected Works of GK Chesterton',
  description: 'Fairy tales do not tell children the dragons exist. Children already know that dragons exist. Fairy tales tell children the dragons can be killed.',
  author: 'G.K. Chesterton',
  read_status: 'Not Read',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/51nN5B2-o3L._SX319_BO1,204,203,200_.jpg'
)
Book.create(
  title: 'The Screwtape Letters',
  description: 'It is funny how mortals always picture us as putting things into their minds: in reality our best work is done by keeping things out.',
  author: 'C.S. Lewis',
  read_status: 'Not Read',
  image_url: 'https://i.pinimg.com/originals/1c/5d/36/1c5d36d69cb90fdc3966860576bd9791.png'
)
Book.create(
  title: 'Phantastes',
  description: 'I watched her departure, as one watches a sunset. She went like a radiance through the dark wood, which was henceforth bright to me, from simply knowing that such a creature was in it.',
  author: 'George MacDonald',
  read_status: 'Not Read',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/51b5NRQFGCL._SX322_BO1,204,203,200_.jpg
'
)
Book.create(
  title: 'The Magicians Nephew',
  description: 'Now the trouble about trying to make yourself stupider than you really are is that you very often succeed',
  author: 'C.S. Lewis',
  read_status: 'Not Read',
  image_url: 'https://www.worldswithoutend.com/covers/csl_themagic.jpg
'
)
Book.create(
  title: 'The Aeneid',
  description: 'Do the gods light this fire in our hearts or does each mans mad desire become his god?',
  author: 'Virgil',
  read_status: 'Not Read',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/51pbtSoPCxL._AC_UL320_SR214,320_.jpg'
)
Book.create(
  title: 'The Bondage of the Will',
  description: 'Now I know from this very word and deed of yours what free choice is and is capable of, namely, madness.',
  author: 'Martin Luther',
  read_status: 'Not Read',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/51q80E-hkOL._AC_UL320_SR214,320_.jpg'
)
Book.create(
  title: 'The Prince',
  description: 'Everyone sees what you appear to be, few experience what you really are.',
  author: 'Niccolò Machiavelli',
  read_status: 'Not Read',
  image_url: 'https://thevirtuallibrary.org/components/com_djclassifieds/images/item/1950_the_prince_-_machiavelli_thb.jpg'
)
Book.create(
  title: 'The Canterbury Tales',
  description: 'Youth may outrun the old, but not outwit.',
  author: 'Geoffrey Chaucer',
  read_status: 'Not Read',
  image_url: 'http://www.top10-best.com/c/canterbury_tales.jpg'
)
Book.create(
  title: 'The Decameron',
  description: 'Do as we say, and not as we do.',
  author: 'Giovanni Boccaccio',
  read_status: 'Not Read',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/51SGO2fPlUL._SX331_BO1,204,203,200_.jpg'
)
Book.create(
  title: 'The Divine Comedy',
  description: 'All hope abandon, ye who enter here.',
  author: 'Dante Alighieri',
  read_status: 'Not Read',
  image_url: 'https://images3.penguinrandomhouse.com/cover/9781101608388'
)
Book.create(
  title: 'Gullivers Travels',
  description: 'Every man desires to live long, but no man wishes to be old.',
  author: 'Jonathan Swift',
  read_status: 'Not Read',
  image_url: 'https://i.pinimg.com/236x/f0/5c/1e/f05c1e23d66787ef506ed6cf12017eed--jonathan-swift-gullivers-travels.jpg'
)
Book.create(
  title: 'The Pilgrims Progress',
  description: 'a man there was, though some did count him mad, the more he cast away the more he had.',
  author: 'John Bunyan',
  read_status: 'Not Read',
  image_url: 'https://images.penguinrandomhouse.com/cover/9780451531292?alt=cover_coming_soon.jpg'
)
Book.create(
  title: 'Robinson Crusoe',
  description: 'Thus fear of danger is ten thousand times more terrifying than danger itself.',
  author: 'Daniel Defoe',
  read_status: 'Not Read',
  image_url: 'https://assets.americanliterature.com/al/images/book/robinson-crusoe.jpg'
)
Book.create(
  title: 'Hard Times',
  description: 'Have a heart that never hardens and a temper that never tires, and a touch that never hurts.',
  author: 'Charles Dickens',
  read_status: 'Not Read',
  image_url: 'http://www.gdprice.com/j/27803.JPG'
)
Book.create(
  title: '20,000 Leagues Under The Sea',
  description: '"Oh, figures!" answered Ned. "You can make figures do whatever you want."',
  author: 'Jules Verne',
  read_status: 'Not Read',
  image_url: 'http://411posters.com/wp-content/uploads/2016/11/20000.jpg'
)
Book.create(
  title: 'Pauls letters to the Romans',
  description: 'For the creation was subjected to futility, not willingly, but because of him who subjected it, in hope',
  author: 'St. Paul',
  read_status: 'Not Read',
  image_url: 'https://www.eerdmans.com/Content/Site146/ProductImages/9780802837431.jpg'
)
