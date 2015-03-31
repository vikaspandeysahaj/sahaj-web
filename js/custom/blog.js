$(document).ready(function () {

    google.load("feeds", "1", {'callback': initialize_blog_summary});

    function initialize_blog_summary() {

        $.each(sahaj.feed_data, function (index, data) {
            var feed = new google.feeds.Feed(data.feed_url);
            feed.load(function(result) {
                if (!result.error) {
                    var entry = result.feed.entries[0];
                    var blog_summary = $("#blog-summary-template").clone();

                    blog_summary.removeAttr('id');
                    blog_summary.removeClass('hidden');
                    blog_summary.find('img').attr('src',data.image_url);
                    blog_summary.find('.author').text(data.author);
                    var date = new Date(entry.publishedDate);
                    date = date.toDateString().substr(4);
                    blog_summary.find('.published-date').text(date);
                    blog_summary.find('.title').text(entry.title);
                    blog_summary.find('.title').attr('href',entry.link);
                    blog_summary.find('.content-snippet').text(entry.contentSnippet);

                    blog_summary.appendTo('#blog-content')
                }
            });
            return index < 3;
        })
    }

});


