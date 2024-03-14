let BookInstance = require('../models/bookinstance');
let book = require('../models/book')

exports.show_all_books_status = async function(res) {
  const allBooks = await BookInstance.find({}).populate('book').exec()
  const available = allBooks.filter(bookins => {
    return bookins.status === 'Available'
  });
  const availableBooks = available.map(avail => {
    
    return `${avail.book.title} - Available`;
  })

  return res.send(availableBooks);
}