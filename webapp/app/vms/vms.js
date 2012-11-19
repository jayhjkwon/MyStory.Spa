define(
    ['./nav', './patients', './referrals', './documents'],
    function(nav, patients, referrals, documents) {
        return {
            nav: nav,
            patients: patients,
            referrals: referrals,
            documents: documents
        };
    }
);