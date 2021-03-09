import React from "react";

const VideoForm = () => {
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Subir video</h3>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="titulo"
                  placeholder="Ingrese el titulo del video..."
                  className="form-control"
                  autoFocus
                ></input>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://ejemplo.com"
                  className="form-control"
                  autoFocus
                ></input>
              </div>

              <div className="form-group">
                <textarea
                  name="descripcion"
                  placeholder="Ingrese una descripción del video..."
                  rows={3}
                  className="form-control"
                ></textarea>
              </div>
              <div className="btn btn-primary">
                    Subir video
                </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
