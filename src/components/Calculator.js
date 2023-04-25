import Display from './Display';

function Calculator() {
  return (
    <div>
      <table>
        <Display />
        <tbody>
          <tr>
            <td>
              <button type="button" className="btn btn-white">
                AC
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-white">
                +/-
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-white">
                %
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-orange">
                ÷
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className="btn btn-white">
                7
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-white">
                8
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-white">
                9
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-orange">
                X
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className="btn btn-white">
                4
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-white">
                5
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-white">
                6
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-orange">
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className="btn btn-white">
                1
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-white">
                2
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-white">
                3
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-orange">
                +
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="button" className="btn btn-white">
                0
              </button>
            </td>

            <td>
              <button type="button" className="btn btn-white">
                .
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-orange">
                =
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
