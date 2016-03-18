$(function () {

    var CALL_ACCEPTED = 'accepted';
    var CALL_PENDING = 'pending';
    var CALL_APPROVED = 'approved';
    var CALL_REJECTED = 'rejected';
    var $errorModal = $('#error-modal');
    var $addCaseForm = $('#add-case-form');


    function init() {
        getCases(CALL_ACCEPTED);
    }

    function getCases(typeOfCases) {
        $.ajax({
            type:'GET',
            url: 'adra/get-cases',
            dataType: 'json',
            data: typeOfCases,
            success: onGetCasesSuccess,
            error: onGetCasesError
        })
    }

    function onGetCasesSuccess(data) {

    }

    function onGetCasesError(data) {
        $errorModal.foundation('open');
    }

    init();
});


$(document).foundation();

