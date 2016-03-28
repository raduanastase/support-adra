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
            <div class="small-12 columns upload-images">
                <input type="file" id="image-upload-input" multiple accept="image/*">
                <a class="button" id="image-upload-button">Adauga poze</a>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns section-title">
                Date de contact ale pesoanei care raporteaza
            </div>
        </div>

        <div class="row">
            <div class="small-6 columns">
                <label for="reporter-last-name">Numele
                    <small>*</small>
                    <input type="text" id="reporter-last-name" required>
                    <span class="form-error">Completarea campului este obligatorie</span>
                </label>
            </div>
            <div class="small-6 columns">
                <label for="reporter-first-name">Prenumele
                    <small>*</small>
                    <input type="text" id="reporter-first-name" required>
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
                <label for="reporter-ci-series">B.I. Seria
                    <input type="text" id="reporter-ci-series">
                </label>
            </div>
            <div class="small-12 medium-4 columns">
                <label for="reporter-ci-number">B.I. Numar
                    <input type="text" id="reporter-ci-number">
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
                <label for="person-last-name">Numele <b>persoanei in cauza</b>
                    <small>*</small>
                    <input type="text" id="person-last-name" required>
                    <span class="form-error">Completarea campului este obligatorie</span>
                </label>
            </div>
            <div class="small-6 columns">
                <label for="person-first-name">Prenumele <b>persoanei in cauza</b>
                    <small>*</small>
                    <input type="text" id="person-first-name" required>
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
                <label for="person-ci-series">B.I. Seria
                    <input type="text" id="person-ci-series">
                </label>
            </div>
            <div class="small-12 medium-4 columns">
                <label for="person-ci-number">B.I. Numar
                    <input type="text" id="person-ci-number">
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