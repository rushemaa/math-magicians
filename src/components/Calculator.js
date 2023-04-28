import { useState } from 'react';
import Display from './Display';
import calculate from '../logic/calculate';

function Calculator() {
  const [obj, setObj] = useState({ total: null, next: null, operation: null });
  let disp = 0;
  if (obj.next) {
    disp = obj.next;
  }

  if (obj.total && !obj.next) {
    disp = obj.total;
  }

  return (
    <div>
      <table>
        <Display total={String(disp)} />
        <tbody>
          <tr>
            <td>
              <button
                type="button"
                value="AC"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                AC
              </button>
            </td>
            <td>
              <button
                type="button"
                value="+/-"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                +/-
              </button>
            </td>
            <td>
              <button
                type="button"
                value="%"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                %
              </button>
            </td>
            <td>
              <button
                type="button"
                value="÷"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-orange"
              >
                ÷
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="button"
                value="7"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                7
              </button>
            </td>
            <td>
              <button
                type="button"
                value="8"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                8
              </button>
            </td>
            <td>
              <button
                type="button"
                value="9"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                9
              </button>
            </td>
            <td>
              <button
                type="button"
                value="x"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-orange"
              >
                X
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="button"
                value="4"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                4
              </button>
            </td>
            <td>
              <button
                type="button"
                value="5"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                5
              </button>
            </td>
            <td>
              <button
                type="button"
                value="6"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                6
              </button>
            </td>
            <td>
              <button
                type="button"
                value="-"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-orange"
              >
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="button"
                value="1"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                1
              </button>
            </td>
            <td>
              <button
                type="button"
                value="2"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                2
              </button>
            </td>
            <td>
              <button
                type="button"
                value="3"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                3
              </button>
            </td>
            <td>
              <button
                type="button"
                value="+"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-orange"
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                type="button"
                value="0"
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                0
              </button>
            </td>

            <td>
              <button
                type="button"
                value="."
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-white"
              >
                .
              </button>
            </td>
            <td>
              <button
                type="button"
                value="="
                onClick={(e) => setObj(calculate(obj, e.target.value))}
                className="btn btn-orange"
              >
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
