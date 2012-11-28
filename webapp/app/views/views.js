define([
    'text!views/top.html',
    'text!views/left.html',
    'text!views/titles.html',
    'text!views/documents.html',
    'text!views/patients.html',
    'text!views/referrals.html'
    ],
    function (top, left, titles, document, patient, referral) {
        return {
            top: top,
            left: left,
            titles: titles,
            document: document,
            patient: patient,
            referral: referral
        }
    }
);