$(function () {

    var CALL_APPROVED = 'approved';
    var CALL_RESOLVED = 'resolved';
    var CALL_PENDING = 'pending';
    var CALL_REJECTED = 'rejected';
    var MODAL_VIEW_VALUES = [
        ['.reporter-last-name', 'reporter_last_name'],
        ['.reporter-first-name', 'reporter_first_name'],
        ['.reporter-cnp', 'reporter_cnp'],
        ['.reporter-ci-series', 'reporter_ci_series'],
        ['.reporter-ci-number', 'reporter_ci_number'],
        ['.reporter-phone', 'reporter_phone'],
        ['.reporter-email', 'reporter_email'],
        ['.person-last-name', 'person_last_name'],
        ['.person-name', 'person_first_name'],
        ['.person-cnp', 'person_cnp'],
        ['.person-ci-series', 'person_ci_series'],
        ['.person-ci-number', 'person_ci_number'],
        ['.person-region', 'person_region'],
        ['.person-city', 'person_city'],
        ['.person-address', 'person_address'],
        ['.person-description', 'person_description'],
        ['.person-money-total', 'person_money_total'],
        ['.person-money-partial', 'person_money_partial']
    ];
    var THUMBNAIL_VALUES = [
        ['.thumbnail-img', 'file_path'],
        ['.case-name', 'case_name'],
        ['.case-description', 'person_description']
    ];
    var $TABS = {};

    var $errorModal = $('#error-modal');
    var $viewCaseTemplate = $('.view-case-template');
    var $addCaseForm = $('#add-case-form');
    var $viewCaseModal = $('#view-case-modal');
    var $imageUploadInput = $('.image-upload-input');
    var $imageUploadButton = $('.image-upload-button');
    var $cases = [];


    function init() {
        $TABS[CALL_APPROVED] = $('#panel1').find('.cases-wrapper');
        $TABS[CALL_RESOLVED] = $('#panel2').find('.cases-wrapper');
        $TABS[CALL_PENDING] = $('#panel3').find('.cases-wrapper');
        $TABS[CALL_REJECTED] = $('#panel4').find('.cases-wrapper');

        getCases(CALL_APPROVED);
        //getCase('1');
        $imageUploadButton.on('click', onImageUploadButtonClick);
    }

    function onImageUploadButtonClick(event) {
        if ($imageUploadInput) {
            $imageUploadInput.click();
        }
        event.preventDefault(); // prevent navigation to "#"
    }

    function getCases(typeOfCases) {
        $.ajax({
            type: 'GET',
            url: 'data.php?' + typeOfCases + '=1',
            dataType: 'json',
            success: function (data) {
                onGetCasesSuccess(data[0], typeOfCases);
            },
            error: onGetCasesError
        })
    }

    function onGetCasesSuccess(data, typeOfCases) {
        data.forEach(function (element, index) {
            $cases.push($viewCaseTemplate.clone());
            THUMBNAIL_VALUES.forEach(function (value, idx) {
                if(idx == 0) {
                    $cases[index].find(value[0]).attr('src', element[value[1]]);
                } else {
                    $cases[index].find(value[0]).text(element[value[1]]);
                }
            });
            $TABS[typeOfCases].append($cases[index]);
        });
        $TABS[typeOfCases].foundation();
    }

    function onGetCasesError(data) {
        $errorModal.foundation('open');
    }

    function getCase(id) {
        $.ajax({
            type: 'GET',
            url: 'data.php?case_id=' + id,
            dataType: 'json',
            success: onGetCaseSuccess,
            error: onGetCaseError
        })
    }

    function onGetCaseSuccess(data) {
        MODAL_VIEW_VALUES.forEach(function (value) {
            $viewCaseModal.find(value[0]).text(element['0'][0][value[1]]);
        });
    }

    function onGetCaseError(data) {
        $errorModal.foundation('open');
    }

    init();
});


$(document).foundation();

