define([
    'text!views/nav.html',
    'text!views/documents.html',
    'text!views/patients.html',
    'text!views/referrals.html',
    ],
    function (nav, document, patient, referral) {
        return {
            nav: nav,
            document: document,
            patient: patient,
            referral: referral
        }
    }
);