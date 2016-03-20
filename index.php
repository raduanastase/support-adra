<?php
include("includes/connect_db.php");
include("includes/functions.php");
?>
<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Foundation | Welcome</title>
    <link rel="stylesheet" href="css/foundation.css"/>
    <link rel="stylesheet" href="css/app.css"/>
</head>
<body>

<!-- DASHBOARD -->
<div class="columns small-12">
    <div class="row">
        <div class="medium-6 medium-centered large-4 large-centered columns text-center">
            <img class="logo" src="img/adra.png">
        </div>
    </div>
    <?php
        if ((isset($_SESSION['user']))) : ?>
            <a href="logout.php" class="button log-out-button">Logout</a>
    <?php endif; 
    ?>
    <button class="button add-case-button" data-open="add-case-modal">Adaugă caz</button>

    <ul class="tabs" data-tabs id="example-tabs">
        <li class="tabs-title is-active"><a href="#panel1" aria-selected="true">Aprobate</a></li>
        <li class="tabs-title"><a href="#panel2">Rezolvate</a></li>
        <li class="tabs-title"><a href="#panel3">În așteptare</a></li>
        <li class="tabs-title"><a href="#panel4">Refuzate</a></li>
    </ul>

    <div class="tabs-content" data-tabs-content="example-tabs">
        <div class="tabs-panel is-active" id="panel1">
            <div class="row small-up-2 medium-up-3 large-up-4 cases-wrapper">

            </div>
        </div>
        <div class="tabs-panel" id="panel2">
            <div class="row small-up-2 medium-up-3 large-up-4 cases-wrapper">

            </div>
        </div>
        <div class="tabs-panel" id="panel3">
            <div class="row small-up-2 medium-up-3 large-up-4 cases-wrapper">

            </div>
        </div>
        <div class="tabs-panel" id="panel4">
            <div class="row small-up-2 medium-up-3 large-up-4 cases-wrapper">

            </div>
        </div>
    </div>
</div>
<!-- END DASHBOARD -->

<!-- MODAL ADD CASE -->
<div class="full reveal" id="add-case-modal" data-reveal>
    <h1>Adaugare caz</h1>
    <button class="close-button" data-close aria-label="Close modal" type="button">
        <span aria-hidden="true">&times;</span>
    </button>

    <form id="add-case-form" method="post" action="upload_data.php?add-case=1" data-abide novalidate enctype="multipart/form-data" >
        <div data-abide-error class="alert callout" style="display: none;">
            <p><i class="fi-alert"></i> Unele campuri obligatorii sunt necompletate.</p>
        </div>

        <div class="row">
            <div class="small-12 columns section-title">
                Date de contact ale pesoanei care raporteaza
            </div>
        </div>

        <div class="row">
            <div class="small-6 columns">
                <label for="reporter-surname">Numele
                    <small>*</small>
                    <input type="text" id="reporter-surname" required>
                    <span class="form-error">Completarea campului este obligatorie</span>
                </label>
            </div>
            <div class="small-6 columns">
                <label for="reporter-name">Prenumele
                    <small>*</small>
                    <input type="text" id="reporter-name" required>
                    <span class="form-error">Completarea campului este obligatorie</span>
                </label>
            </div>
        </div>

        <div class="row">
            <div class="small-12 medium-4 columns">
                <label for="reporter-cnp">C.N.P.
                    <input type="text" id="reporter-cnp">
                </label>
            </div>
            <div class="small-12 medium-4 columns">
                <label for="reporter-bi-series">B.I. Seria
                    <input type="text" id="reporter-bi-series">
                </label>
            </div>
            <div class="small-12 medium-4 columns">
                <label for="reporter-bi-number">B.I. Numar
                    <input type="text" id="reporter-bi-number">
                </label>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns">
                <label for="reporter-phone">Numar de telefon
                    <small>*</small>
                    <input type="tel" id="reporter-phone" required pattern="number">
                    <span class="form-error">Completarea campului este obligatorie</span>
                </label>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns">
                <label for="reporter-email">Email
                    <input type="email" id="reporter-email">
                </label>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns section-title">
                Date despre persoana in cauza
            </div>
        </div>

        <div class="row">
            <div class="small-6 columns">
                <label for="person-surname">Numele <b>persoanei in cauza</b>
                    <small>*</small>
                    <input type="text" id="person-surname" required>
                    <span class="form-error">Completarea campului este obligatorie</span>
                </label>
            </div>
            <div class="small-6 columns">
                <label for="person-name">Prenumele <b>persoanei in cauza</b>
                    <small>*</small>
                    <input type="text" id="person-name" required>
                    <span class="form-error">Completarea campului este obligatorie</span>
                </label>
            </div>
        </div>

        <div class="row">
            <div class="small-12 medium-4 columns">
                <label for="person-cnp">C.N.P.
                    <input type="text" id="person-cnp">
                </label>
            </div>
            <div class="small-12 medium-4 columns">
                <label for="person-bi-series">B.I. Seria
                    <input type="text" id="person-bi-series">
                </label>
            </div>
            <div class="small-12 medium-4 columns">
                <label for="person-bi-number">B.I. Numar
                    <input type="text" id="person-bi-number">
                </label>
            </div>
        </div>

        <div class="row">
            <div class="small-12 medium-6 columns">
                <label for="person-region">Judet
                    <small>*</small>
                    
                    <select name="person-region" id="person-region"><!-- ADD REQUIRED -->
                    	<option value="0">Alege</option>
                    	<?php
                    		$res_county = mysqli_query($conn, 'select * from ps_state order by name');
                    		while($row_county = mysqli_fetch_array($res_county))
							{
								?>
										<option value="<?php echo $row_county['ID']?>"><?php echo $row_county['name']?></option>
								<?php
							}
                    	?>
                    </select>
                    <span class="form-error">Completarea campului este obligatorie</span>
                </label>
            </div>
            <div class="small-12 medium-6 columns">
                <label for="person-city">Localitate
                    <small>*</small>
                    <input type="text" id="person-city" required>
                    <span class="form-error">Completarea campului este obligatorie</span>
                </label>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns">
                <label for="person-address">Alte detalii adresa (strada,numar,etc.)
                    <small>*</small>
                    <input type="text" id="person-address" required>
                    <span class="form-error">Completarea campului este obligatorie</span>
                </label>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns">
                <label for="person-description">Descriere
                    <small>*</small>
                    <textarea type="text" id="person-description" maxlength="1000" required></textarea>
                    <span class="form-error">Completarea campului este obligatorie</span>
                </label>
            </div>
        </div>
       <?php
        if ((isset($_SESSION['user']))) : ?>
            
            <div class="row">
                <div class="small-12 medium-6 columns">
                    <label for="person-money-total">
                        <span class="row">
                            <span class="small-12 columns">Suma necesara</span>
                        </span>
                        <span class="row">
                            <span class="small-10 columns"><input type="text" id="person-money-total"></span>
                            <span class="small-2 columns">RON</span>
                        </span>
                    </label>
                </div>
                <div class="small-12 medium-6 columns">
                    <label for="person-money-partial">
                        <span class="row">
                            <span class="small-12 columns">Suma stransa</span>
                        </span>
                        <span class="row">
                            <span class="small-10 columns"><input type="text" id="person-money-partial"></span>
                            <span class="small-2 columns">RON</span>
                        </span>
                    </label>
                </div>
            </div>
        <?php endif; 
        ?>

        <div class="row">
            <div class="small-6 columns">
                <button class="button float-right" type="submit" value="Submit">Submit</button>
            </div>
            <div class="small-6 columns">
                <button class="button" type="reset" value="Reset">Reset</button>
            </div>
        </div>
    </form>
</div>
<!-- END MODAL ADD CASE -->

<!-- MODAL VIEW CASE -->
<div class="full reveal" id="view-case-modal" data-reveal>
    <h1>Nume caz</h1>
    <button class="close-button" data-close aria-label="Close modal" type="button">
        <span aria-hidden="true">&times;</span>
    </button>

    <div class="row">
        <div class="small-12 columns section-title">
            Date de contact ale pesoanei care raporteaza
        </div>
    </div>

    <div class="row">
        <div class="small-6 columns">
            <div class="modal-label">Nume</div>
            <div class="reporter-surname-text modal-label-value">Ion</div>
        </div>
        <div class="small-6 columns">
            <div class="modal-label">Prenume</div>
            <div class="reporter-name-text modal-label-value">Popescu</div>
        </div>
    </div>

    <div class="row">
        <div class="small-4 columns">
            <div class="modal-label">C.N.P.</div>
            <div class="reporter-cnp modal-label-value">123123123123</div>
        </div>
        <div class="small-4 columns">
            <div class="modal-label">B.I. Seria</div>
            <div class="reporter-bi-series modal-label-value">PX</div>
        </div>
        <div class="small-4 columns">
            <div class="modal-label">B.I. Numar</div>
            <div class="reporter-bi-number modal-label-value">111111</div>
        </div>
    </div>

    <div class="row">
        <div class="small-6 columns">
            <div class="modal-label">Numar de telefon</div>
            <div class="reporter-phone modal-label-value">0722222222</div>
        </div>
        <div class="small-6 columns">
            <div class="modal-label">Email</div>
            <div class="reporter-email modal-label-value">asd@asd.asd</div>
        </div>
    </div>

    <div class="row">
        <div class="small-12 columns section-title">
            Date despre persoana in cauza
        </div>
    </div>

    <div class="row">
        <div class="small-6 columns">
            <div class="modal-label">Numele <b>persoanei in cauza</b></div>
            <div class="person-surname modal-label-value">Sandu</div>
        </div>
        <div class="small-6 columns">
            <div class="modal-label">Prenumele <b>persoanei in cauza</b></div>
            <div class="person-name modal-label-value">Catalin</div>
        </div>
    </div>

    <div class="row">
        <div class="small-4 columns">
            <div class="modal-label">C.N.P.</div>
            <div class="person-cnp modal-label-value">123123123123</div>
        </div>
        <div class="small-4 columns">
            <div class="modal-label">B.I. Seria</div>
            <div class="person-bi-series modal-label-value">PX</div>
        </div>
        <div class="small-4 columns">
            <div class="modal-label">B.I. Numar</div>
            <div class="person-bi-number modal-label-value">111111</div>
        </div>
    </div>

    <div class="row">
        <div class="small-6 columns">
            <div class="modal-label">Judet</div>
            <div class="person-region modal-label-value">Prahova</div>
        </div>
        <div class="small-6 columns">
            <div class="modal-label">Localitate</div>
            <div class="person-city modal-label-value">Ploiesti</div>
        </div>
    </div>

    <div class="row">
        <div class="small-12 columns">
            <div class="modal-label">Alte detalii adresa (strada,numar,etc.)</div>
            <div class="person-address modal-label-value">Strada Mare nr. 22</div>
        </div>
    </div>

    <div class="row">
        <div class="small-12 columns">
            <div class="modal-label">Descriere</div>
            <div class="person-description modal-label-value">Lorem ipsum</div>
        </div>
    </div>

    <div class="row">
        <div class="small-6 columns">
            <div class="modal-label">Suma necesara</div>
            <div class="person-money-total modal-label-value">300 RON</div>
        </div>
        <div class="small-6 columns">
            <div class="modal-label">Suma stransa</div>
            <div class="person-money-partial modal-label-value">100 RON</div>
        </div>
    </div>
</div>
<!-- END MODAL VIEW CASE -->

<!-- VIEW CASE TEMPLATE -->
<div class="column view-case-template">
    <a data-open="view-case-modal">
        <div class="thumbnail">
            <img class="thumbnail-img" src="img/test.png">
            <h5 class="case-name">Nume caz</h5>
            <h6 class="case-description">Lorem ipsum dolor sit amet, no tation putent docendi duo, sit modo deserunt mnesarchum
                et, dicant consequuntur definitiones cu eum. </h6>
        </div>
    </a>
</div>
<!-- END VIEW CASE TEMPLATE -->

<!-- MODAL VIEW CASE -->
<div class="small reveal" id="error-modal" data-reveal>
    <button class="close-button" data-close aria-label="Close modal" type="button">
        <span aria-hidden="true">&times;</span>
    </button>

    <div class="row">
        <div class="small-6 small-centered columns text-center">
            <div class="modal-title">Eroare</div>
        </div>
    </div>

    <div class="row error-text">
        <div class="small-12 columns text-center">
            Ne pare rau, dar a aparut o eroare.
        </div>
    </div>

</div>
<!-- END MODAL VIEW CASE -->

<script src="js/vendor/jquery.min.js"></script>
<script src="js/vendor/what-input.min.js"></script>
<script src="js/foundation.min.js"></script>
<script src="js/app.js"></script>
</body>
</html>
